from django.urls import path
from .views import intern_signup, personal_information_detail

urlpatterns = [
    path('signup/', intern_signup, name='intern_signup'),
    path('personal-info/', personal_information_detail, name='personal_information_detail'),
]
