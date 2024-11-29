import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PhotoUpload = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the JWT token in local storage
    const token = localStorage.getItem('accessToken');
    console.log(token)

    if (!token) {
      navigate('/login');  
    }
  }, [navigate]);

  const handleFileUrlChange = (e) => {
    setFileUrl(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage('');
    setError('');

    if (!fileUrl) {
      setError('File URL is required.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/photos/upload/', 
        {
          file_url: fileUrl,
          description: description,
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Assuming you're using JWT token for authentication
          },
        }
      );

      setMessage('Photo uploaded successfully.');
      setFileUrl('');
      setDescription('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred while uploading the photo.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full dark:bg-black dark:text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#ff006e]">Upload Photo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fileUrl" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">File URL:</label>
            <input
              type="url"
              id="fileUrl"
              value={fileUrl}
              onChange={handleFileUrlChange}
              placeholder="Enter image URL"
              required
              className="mt-1 w-full p-2 border border-neutral-300 rounded-md focus:ring-[#ff006e] focus:border-[#ff006e] dark:bg-black dark:border-neutral-600 dark:text-white dark:focus:ring-[#ff006e] dark:focus:border-[#ff006e]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter a description (optional)"
              className="mt-1 w-full p-2 border border-neutral-300 rounded-md focus:ring-[#ff006e] focus:border-[#ff006e] dark:bg-black dark:border-neutral-600 dark:text-white dark:focus:ring-[#ff006e] dark:focus:border-[#ff006e]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#ff006e] text-white font-semibold rounded-md hover:bg-[#fb5607] transition duration-200"
          >
            Upload
          </button>
        </form>

        {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default PhotoUpload;
