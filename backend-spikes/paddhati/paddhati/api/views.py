from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import render
from paddhati.api.models import Card
from paddhati.api.serializers import UserSerializer, GroupSerializer, CardSerializer
# from . import serializers

# temporary hack for pratul:
from django.db.models import query

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class CardViewSet(viewsets.ModelViewSet):
    # i = "https://www.gravatar.com/avatar/03e8994ec9679667eb7eabe1138e168e?s=240&d=mp"
    # q = "A Silent Space is a universal space with the single purpose of turning the volume down to zero. It exists so its visitors may experience silence. To meditate. This is a recursive definition where meditation means any silent and introspective activity. Whether one adopts the Stoic definition of meditation, of deep and penetrating thought, or the religious definition of solitary prayer, or the attention-based definition of intentional practice, a Silent Space exists for the purpose of meditation. Silence is a prerequisite of meditation."
    # c = Card(image=i, quote=q)
    # queryset = [c, c, c, c, c, c, c] # not sure how to stub a QuerySet for pratul's temporary hack :/ -sd
    queryset = Card.objects.all()
    serializer_class = CardSerializer
