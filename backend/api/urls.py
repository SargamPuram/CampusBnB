from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView
from users.views import JWTLogIn, JWTSignUp
from medias.views import PhotoDetail, GetUploadURL
from categories.views import CategoryViewSet
from experiences.views import Perks, PerkDetail
from rooms.views import Rooms, RoomDetail, RoomReviews, RoomPhotos, RoomBookings, RoomBookingCheck, Amenities, AmenityDetail
from wishlists.views import Wishlists, WishlistDetail, WishlistToggle

urlpatterns = [
    # Routes for authentication
    path('', views.getRoutes, name='api-routes'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', JWTLogIn.as_view(), name='jwt-login'),
    path('signup/', JWTSignUp.as_view(), name='jwt-signup'),

    # Routes for photo handling
    path('photos/get-url', GetUploadURL.as_view(), name='get-upload-url'),
    path('photos/<int:pk>', PhotoDetail.as_view(), name='photo-detail'),

    # Routes for category management
    path('categories/', CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name='category-list-create'),
    path('categories/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve', 'put': 'partial_update', 'delete': 'destroy'}), name='category-detail-update-delete'),

    # Routes for perks
    path('perks/', Perks.as_view(), name='perks-list'),
    path('perks/<int:pk>', PerkDetail.as_view(), name='perk-detail'),

    # Routes for rooms
    path('rooms/', Rooms.as_view(), name='rooms-list'),
    path('rooms/<int:pk>', RoomDetail.as_view(), name='room-detail'),
    path('rooms/<int:pk>/reviews', RoomReviews.as_view(), name='room-reviews'),
    path('rooms/<int:pk>/photos', RoomPhotos.as_view(), name='room-photos'),
    path('rooms/<int:pk>/bookings', RoomBookings.as_view(), name='room-bookings'),
    path('rooms/<int:pk>/bookings/check', RoomBookingCheck.as_view(), name='room-booking-check'),
    path('amenities/', Amenities.as_view(), name='amenities-list'),
    path('amenities/<int:pk>', AmenityDetail.as_view(), name='amenity-detail'),

    # Routes for wishlists
    path('wishlists/', Wishlists.as_view(), name='wishlists-list'),
    path('wishlists/<int:pk>', WishlistDetail.as_view(), name='wishlist-detail'),
    path('wishlists/<int:pk>/rooms/<int:room_pk>', WishlistToggle.as_view(), name='wishlist-toggle-room'),
]
