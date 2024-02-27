from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Game
from .serializers import GameSerializer, SolutionSubmissionSerializer
import requests

class GameList(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            'status': 'success',
            'game_id': serializer.instance.id
        })

class SubmitSolutionView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SolutionSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            # todo: update placeholder
            slug = "median-of-two-sorted-arrays"
            url = f"https://leetcode.com/problems/{slug}/submit/"
            headers = {
                "Cookie": f"LEETCODE_SESSION={data['session']}",
                "Content-Type": "application/json",
            }
            response = requests.post(url, headers=headers, json={
                "question_id": data['question_id'],
                "lang": data['lang'],
                "typed_code": data['typed_code'],
            })
            if response.status_code == 200:
                return Response({"message": "Submission successful!"})
            else:
                return Response({"message": "Submission failed."}, status=response.status_code)
        return Response(serializer.errors, status=400)