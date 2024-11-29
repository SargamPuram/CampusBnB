from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from django.http import JsonResponse
from .models import Photo
from .serializers import PhotoSerializer
import logging
from rest_framework import status


logger = logging.getLogger(__name__)

class PhotoDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Photo.objects.get(pk=pk)
        except Photo.DoesNotExist:
            raise NotFound("Photo not found.")

    def delete(self, request, pk):
        photo = self.get_object(pk)
        if (photo.room and photo.room.owner != request.user) or (
            photo.experience and photo.experience.host != request.user
        ):
            raise PermissionDenied("You do not have permission to delete this photo.")
        photo.delete()
        return Response({"message": "Photo deleted successfully."}, status=200)


class GetUploadURL(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        file_url = request.data.get('file_url')
        description = request.data.get('description', '')

        if not file_url:
            return Response({"error": "No file URL provided."}, status=400)

        try:
            # Create a new Photo entry with the provided URL
            photo = Photo.objects.create(
                file_url=file_url,
                description=description,
                uploaded_by=request.user  # Ensure `uploaded_by` exists in your CommonModel
            )

            return Response({
                'message': 'Photo URL saved successfully.',
                'photo_id': photo.id
            }, status=201)
        except Exception as e:
            logger.error(f"Error saving photo URL: {e}")
            return Response({"error": str(e)}, status=500)


# views.py
class ServePhoto(APIView):
    def get(self, request, pk):
        try:
            photo = Photo.objects.get(pk=pk)
            if not photo.file_url:
                return Response({"error": "No file URL associated with this photo."}, status=404)
            
            # Return the URL of the photo directly
            return Response({"file_url": photo.file_url}, status=200)
        except Photo.DoesNotExist:
            return Response({"error": "Photo not found."}, status=404)
        except Exception as e:
            logger.error(f"Error serving photo URL: {e}")
            return Response({"error": "Failed to serve photo."}, status=500)

        
class ServeAllPhotos(APIView):
    def get(self, request, *args, **kwargs):
        try:
            photos = Photo.objects.all()
            serializer = PhotoSerializer(photos, many=True)
            return Response({"photos": serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class PhotoDeleteView(APIView):
    def delete(self, request, pk, format=None):
        try:
            photo = Photo.objects.get(pk=pk)  # Get the photo by ID
            photo.delete()  # Delete the photo
            return Response({'message': 'Photo deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
        except Photo.DoesNotExist:
            return Response({'error': 'Photo not found.'}, status=status.HTTP_404_NOT_FOUND)