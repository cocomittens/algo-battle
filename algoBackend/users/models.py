from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    leetcode_username = models.CharField(max_length=60, blank=True)

    def __str__(self):
        return self.user.username
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.userprofile.save()

class UserSession(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    session_cookie = models.TextField(max_length=100, blank=True)
    csrf_token = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.user.username