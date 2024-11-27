from rest_framework import serializers
from users.serializers import MiniUserSerializer
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):

    user = MiniUserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = (
            "user",
            "payload",
            "rating",
        )