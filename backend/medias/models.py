from django.db import models
from commonmodel.models import CommonModel
from django.conf import settings


class Photo(CommonModel):
    # Store the image URL directly
    file_url = models.URLField(default='https://example.com/placeholder.jpg')
    description = models.CharField(
        max_length=140,
    )
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)  # Add the uploaded_by field
    room = models.ForeignKey(
        "rooms.Room",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="photos",
    )
    experience = models.ForeignKey(
        "experiences.Experience",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="photos",
    )

    def __str__(self):
        return f"Photo File {self.id}"

class Video(CommonModel):

    file = models.URLField()
    experience = models.OneToOneField(
        "experiences.Experience",
        on_delete=models.CASCADE,
        related_name="videos",
    )

    def __str__(self):
        return "Video File"
