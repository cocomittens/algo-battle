from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserProfileSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer