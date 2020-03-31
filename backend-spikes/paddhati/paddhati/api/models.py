from django.db import models
from django.core.serializers.json import DjangoJSONEncoder

class Card(models.Model):
    type = models.CharField(max_length=50)
    alignment = models.CharField(max_length=50)
    image = models.CharField('card background image', max_length=200)
    quote = models.CharField(max_length=200)


# class LazyEncoder(DjangoJSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, YourCustomType):
#             return str(obj)
#         return super().default(obj)
