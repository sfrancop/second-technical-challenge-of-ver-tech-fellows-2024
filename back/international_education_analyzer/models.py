from django.db import models

# Create your models here.
class Query(models.Model):
    name = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    comment = models.CharField(max_length=2000)
    query = models.TextField(max_length=2000)