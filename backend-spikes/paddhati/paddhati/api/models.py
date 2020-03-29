from django.db import models

class Card(models.Model):
    image = models.CharField('card background image', max_length=200)
    quote = models.CharField(max_length=200)
