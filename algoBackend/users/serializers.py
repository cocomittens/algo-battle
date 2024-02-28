from rest_framework import serializers
from .models import  UserProfile, UserSession

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'first_name', 'last_name', 'bio', 'leetcode_username')

class UserSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'session_cookie', 'csrf_token')