import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  // Fetch photos from the backend when the component mounts
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Adjust the endpoint as per your backend
        const response = await axios.get('http://localhost:8000/api/photos/');
        
        // Assuming the backend sends the photos in response.data.photos
        setPhotos(response.data.photos);  // Adjust if necessary based on the actual response structure
      } catch (error) {
        console.log('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="photo-gallery">
      <h1 className="text-center text-2xl mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="photo-card bg-white shadow-lg rounded-lg p-4">
              <img
                src={photo.file_url}  // Ensure file_url is correctly returned from the backend
                alt="Uploaded"
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <p className="text-center text-sm">{photo.description || 'No description'}</p>
            </div>
          ))
        ) : (
          <p className="text-center">No photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
