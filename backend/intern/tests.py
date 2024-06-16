# Refer to the following stackoverflow answer to understand why I'm using the next 2 lines
# https://stackoverflow.com/a/17874111/14033904
from django.contrib.auth import get_user_model
User = get_user_model()

user = User.objects.create_user(username='testuser', password='testpass')
user.save()

from django.contrib.auth import authenticate
user = authenticate(username='testuser', password='testpass')
print(user)
