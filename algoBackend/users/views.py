from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserProfileSerializer

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer