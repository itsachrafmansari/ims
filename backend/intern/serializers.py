from rest_framework import serializers
from .models import PersonalInformation, AdministrativeInformation

# Refer to the following stackoverflow answer to understand why I'm using the next 2 lines
# https://stackoverflow.com/a/17874111/14033904
from django.contrib.auth import get_user_model
User = get_user_model()


class PersonalInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInformation
        fields = '__all__'
        read_only_fields = ['user']

    def update(self, instance, validated_data):
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.birth_date = validated_data.get('birth_date', instance.birth_date)
        instance.birth_place = validated_data.get('birth_place', instance.birth_place)
        instance.school_name = validated_data.get('school_name', instance.school_name)
        instance.major = validated_data.get('major', instance.major)
        instance.education_level = validated_data.get('education_level', instance.education_level)
        instance.is_modifiable = validated_data.get('is_modifiable', instance.is_modifiable)
        instance.save()
        return instance


class AdministrativeInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdministrativeInformation
        fields = '__all__'


class InternSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        personal_info_data = validated_data.pop('personal_info')
        admin_info_data = validated_data.pop('admin_info')
        user = User(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            username=validated_data['username'],
            role='intern'
        )
        user.set_password(validated_data['password'])
        user.save()
        PersonalInformation.objects.create(user=user, **personal_info_data)
        AdministrativeInformation.objects.create(user=user, **admin_info_data)
        return user
