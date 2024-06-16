from rest_framework import serializers

# Refer to the following stackoverflow answer to understand why I'm using the next 2 lines
# https://stackoverflow.com/a/17874111/14033904
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    portrait_image_url = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'portrait_image_url', 'first_name', 'last_name', 'username', 'email', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def get_portrait_image_url(self, obj):
        request = self.context.get('request')
        if obj.portrait_image and hasattr(obj.portrait_image, 'url'):
            return request.build_absolute_uri(obj.portrait_image.url)
        return None

    def create(self, validated_data):
        user = User(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            username=validated_data['username'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
