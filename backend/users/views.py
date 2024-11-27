from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  
from django.contrib.auth import authenticate 
from rest_framework.exceptions import ParseError, NotFound 
from . import serializers
from users.models import User


from rest_framework_simplejwt.tokens import RefreshToken

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
        password = request.data.get("password")
        if not password:
            raise ParseError
        serializer = serializers.FullUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(password) 
            user.save()
            serializer = serializers.FullUserSerializer(user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


