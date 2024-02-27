from rest_framework import serializers
from .models import  Game, Solution

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'session')

class SolutionSerializer(serializers.Serializer):
    class Meta:
        model = Solution
        fields = ('id', 'session', 'problem_id', 'solution_code', 'language')