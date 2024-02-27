from rest_framework import viewsets
from rest_framework.response import Response
from .models import Game
from .serializers import GameSerializer

class GameList(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def create(self, request, *args, **kwargs):
        # You can use serializer.save() to create a new Game instance.
        # DRF's request.data will contain the data sent in the POST request.
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            'status': 'success',
            'game_id': serializer.instance.id
        })
