from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/submit/', views.SubmitSolutionView.as_view(), name='submit_solution'),
]