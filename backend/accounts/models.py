from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ('intern', 'Intern'),
        ('staff', 'Staff'),
        ('supervisor', 'Supervisor'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    portrait_image = models.ImageField(upload_to='portraits/')
