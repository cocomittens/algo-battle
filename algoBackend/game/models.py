from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Game(models.Model):
    id = models.AutoField(primary_key=True)
    session = models.TextField(max_length=500, blank=True)
    user = models.TextField(max_length=60, blank=True)
    opponent = models.TextField(max_length=60, blank=True)

    def __str__(self):
        return str(self.id)
    
