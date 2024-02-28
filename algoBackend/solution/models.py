from django.db import models

# Create your models here.
class Solution(models.Model):
    id = models.AutoField(primary_key=True)
    session = models.TextField(max_length=1000, blank=True)
    question_id = models.CharField(max_length=50)
    typed_code = models.TextField()
    lang = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)
    
