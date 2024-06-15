from django.contrib import admin
from .models import PersonalInformation, AdministrativeInformation

# Register your models here.
admin.site.register(PersonalInformation)
admin.site.register(AdministrativeInformation)
