import React, { useRef, useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);

  async function sendSignup(event) {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', userData);
      console.log(response.data);
   
    } catch (e) {
      setError("Oops! Something went wrong. Please try again.");
      console.error(e);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 via-white-500 to-black-500">
      <div className="w-80 p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-4">Sign Up</h1>
        <form ref={formRef} className="flex flex-col space-y-4">
          {/* Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Create a cool username"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Choose a strong password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Student ID Input */}
          <input
            type="text"
            name="stud_id"
            placeholder="Enter your student ID"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="stud_email"
            placeholder="Your best email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Display error message if exists */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="button"
            onClick={sendSignup}
            className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Let's Get Started!
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
