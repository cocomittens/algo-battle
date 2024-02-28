from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import SolutionSerializer
from .models import Solution

import requests
import time
import json
import logging

logger = logging.getLogger(__name__)

# Create your views here.
class SubmitSolutionView(viewsets.ModelViewSet):
    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.client = requests.Session()
        self.task_search_name = "median_of_two_sorted_arrays"

    
    def lang_converter(self, lang):
        return {
            "CPP": "cpp",
            "Java": "java",
            "Python": "python",
            "Python3": "python3",
        }[lang]
    

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        lang = request.data.get('lang')
        code = request.data.get('typed_code')
        if not lang or not code:
            return Response({"error": "Language and code are required."})

        lang_str = self.lang_converter(lang)
        try:
            json_data = json.dumps({
                "question_id": 4,
                "lang": lang_str,
                "typed_code": code,
            })

            sessionCookie = requests.get("localhost:8000/api/session/", headers={"Content-Type": "application/json"}) 

            headers = {"User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36", "Origin": "https://leetcode.com", "Referer": "https://leetcode.com/", "Host": "leetcode.com", "X-CSRFToken": "ImcTrpOKcjyN6G7d5OVrsFrC4hDOonFpYDktN4AuivJI1YHoModQlsHZVhoAk5B9", "Content-Type": "application/json", 'Cookie': 'csrftoken=ImcTrpOKcjyN6G7d5OVrsFrC4hDOonFpYDktN4AuivJI1YHoModQlsHZVhoAk5B9; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTgwOTM5NCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjgyNjhjODI5MzQ3N2M3MDBiNmM5ZTZlMTZhOTVjMTE4NTc0OTljYzQwMjVjNGI5YmNmZjEzNGUxMmRlZDc2ZGEiLCJpZCI6MTgwOTM5NCwiZW1haWwiOiJjb3JyaWVzdG9kZGFyZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImlvcXJlbiIsInVzZXJfc2x1ZyI6ImlvcXJlbiIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9pb3FyZW4vYXZhdGFyXzE1NTMxMDA4NDMucG5nIiwicmVmcmVzaGVkX2F0IjoxNzA4OTk1MTU2LCJpcCI6IjI2MDA6MTcwMDoyZjcwOjUyMTA6MjBiNTpjOGY2OjdiNjA6MmM0YyIsImlkZW50aXR5IjoiMjRlODdlNWYxNTZhYjQ4YzViYjU1OWU0YzE2NTIyMzQiLCJzZXNzaW9uX2lkIjo1NjQ2MDEyNn0.xSg70gYZgkZDhoDQoLET7XZpxRuAVKJo6QpvYeo4jVM'}
            response = requests.post(f"https://leetcode.com/problems/median-of-two-sorted-arrays/submit/", data=json_data, headers=headers)
            resp_data = response.json()
            submission_id = resp_data['submission_id']
            status_response = requests.get(f"https://leetcode.com/submissions/detail/{submission_id}/check/", headers=headers)
            status_data = status_response.json()
            print('status_data: ', status_data, status_data['state'])
            while status_data['state'] == 'PENDING':
                time.sleep(1)
                status_response = requests.get(f"https://leetcode.com/submissions/detail/{submission_id}/check/", headers=headers)
                status_data = status_response.json()
                print('response: ', status_response, 'data: ', status_data)
            time.sleep(1)

            # Add status and result to the serializer
            serializer.instance.status = status_data['state']
            serializer.instance.result = status_data['status_msg']
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            logger.error(f"Error submitting solution: {e}")
            return Response({"error": "Failed to submit solution."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    