from django.urls import path
from .views import JWTLogIn

urlpatterns = [
    path('user/', JWTLogIn.as_view(), name='jwt-login'),
    # Add other routes as needed
]
