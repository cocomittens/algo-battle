from django.urls import path
from . import views

urlpatterns = [
    path('api/game/', views.GameList.as_view()),
    path('api/game/submit/', views.SubmitSolutionView.as_view(), name='submit_solution'),
]