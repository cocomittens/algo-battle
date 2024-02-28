from django.contrib import admin

from .models import UserProfile, UserSession

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(UserSession)