from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UserList.as_view()),
    path('api/session/', views.SessionViewSet.as_view()),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('api/signup/', views.SignupView.as_view(), name='signup'),
]