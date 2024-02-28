from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserProfileSerializer, UserRegistrationSerializer, UserSessionSerializer
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSessionSerializer

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(username=user.username)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class SignupView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)