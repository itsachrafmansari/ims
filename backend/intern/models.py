from django.db import models

# Refer to the following stackoverflow answer to understand why I'm using the next 2 lines
# https://stackoverflow.com/a/17874111/14033904
from django.contrib.auth import get_user_model
User = get_user_model()


class PersonalInformation(models.Model):
    EDUCATION_LEVEL_CHOICES = (
        ('bac1', 'Bac + 1'),
        ('bac2', 'Bac + 2'),
        ('bac3', 'Bac + 3'),
        ('bac4', 'Bac + 4'),
        ('bac5', 'Bac + 5'),
        ('bac6', 'Bac + 6'),
        ('bac7', 'Bac + 7'),
        ('bac8', 'Bac + 8'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='personal_information')
    phone_number = models.CharField(max_length=15)
    birth_date = models.DateField()
    birth_place = models.CharField(max_length=255)
    school_name = models.CharField(max_length=255)
    major = models.CharField(max_length=255)
    education_level = models.CharField(max_length=255, choices=EDUCATION_LEVEL_CHOICES)
    is_modifiable = models.BooleanField(default=True)


class AdministrativeInformation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='administrative_information')
    id_card = models.FileField(upload_to='documents/')
    enrolment_certificate = models.FileField(upload_to='documents/')
    internship_start_date = models.DateField()
    internship_end_date = models.DateField()
    internship_agreement = models.FileField(upload_to='documents/')
    internship_insurance = models.FileField(upload_to='documents/')
    resume = models.FileField(upload_to='documents/')
    cover_letter = models.FileField(upload_to='documents/')
    is_modifiable = models.BooleanField(default=True)
