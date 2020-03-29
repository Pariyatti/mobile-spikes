from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import render
from django.views import generic
from paddhati.api.models import Card
from paddhati.api.serializers import UserSerializer, GroupSerializer, CardSerializer
# from . import serializers

# temporary hack for pratul:
from django.db.models import query

import json
from django.http import HttpResponse
from django.forms.models import model_to_dict
from django.core import serializers

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
    # queryset = [c, c, c, c, c, c, c] # not sure how to stub a QuerySet for pratul's temporary hack :/ -sd
    queryset = Card.objects.all()
    serializer_class = CardSerializer

def today_view(request):
    i = "https://pariyatti.org/portals/0/Images/treasures/ws.jpg"
    q = "Ven. Webu Sayadaw was one of the most highly respected monks of the last century in Burma. He was notable in giving all importance to diligent practice rather than to scholastic achievement. Webu Sayadaw was born in the village of Ingyinpin in upper Burma on 17 February 1896. He underwent the usual monk's training in the Pāli scriptures from the age of nine, when he became a novice, until he was twenty-seven. In 1923 (seven years after his ordination), he left the monastery and spent four years in solitude. He practiced (and later taught) the technique of Ānāpāna-sati (awareness of the in-breath and out-breath)."
    c = model_to_dict(Card(image=i, quote=q))
    today_card_list = [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c]
    context = {'today_cards': today_card_list}
    json_data = json.dumps(context)
    return HttpResponse(json_data, content_type='application/json')

    # return render(request, , json.dumps(context))
    # serializers.serialize('json', today_card_list)
