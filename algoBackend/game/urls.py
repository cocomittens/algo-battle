from django.urls import path
from . import views

urlpatterns = [
    path('api/game/', views.GameList.as_view()),
    path('submit_solution/', views.SubmitSolutionView.as_view(), name='submit_solution'),
]