from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from users.models import User
from . import serializers

class JWTLogIn(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }
            })
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class JWTSignUp(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        currency = request.data.get("currency")
        gender = request.data.get("gender")

        if not username or not password:
            return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        if not currency or not gender:
            return Response({"error": "Currency and gender are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if currency and gender are valid
        valid_currencies = ['usd', 'inr']
        valid_genders = ['male', 'female']

        if currency not in valid_currencies:
            return Response({"error": "Invalid currency. Allowed values are: usd, inr."}, status=status.HTTP_400_BAD_REQUEST)

        if gender not in valid_genders:
            return Response({"error": "Invalid gender. Allowed values are: male, female."}, status=status.HTTP_400_BAD_REQUEST)

        # Create the user
        serializer = serializers.FullUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(password)  # Set the password after creating the user (this will hash it)
            user.save()

            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)

            # Return the response with user data and tokens
            return Response({
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "currency": currency,
                    "gender": gender
                }
            })
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
