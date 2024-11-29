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
      currency: formData.get('currency'),
      gender: formData.get('gender'),
    };

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', userData);
      console.log(response.data);
      // Redirect or perform further actions if the signup is successful
    } catch (e) {
      // Check if the error is related to currency or gender fields and display appropriate messages
      if (e.response && e.response.data) {
        const { currency, gender } = e.response.data;
        setError(`Currency: ${currency ? currency[0] : ''} Gender: ${gender ? gender[0] : ''}`);
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
      console.error(e);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f1faee] to-[#a8dadc]">
      <div className="w-full sm:w-96 p-6 rounded-xl shadow-2xl bg-white">
        <h1 className="text-center text-4xl font-semibold text-[#e63946] mb-6 font-montserrat">Sign Up</h1>
        <form ref={formRef} className="flex flex-col space-y-6">
          {/* Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Create a cool username"
            className="p-4 text-lg border-2 border-[#457b9d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8dadc] font-poppins"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Choose a strong password"
            className="p-4 text-lg border-2 border-[#457b9d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8dadc] font-poppins"
          />

          {/* Currency Input (Dropdown) */}
          <select
            name="currency"
            className="p-4 text-lg border-2 border-[#457b9d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8dadc] font-poppins"
          >
            <option value="">Select Currency</option>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          </select>

          {/* Gender Input (Radio Buttons) */}
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-2"
              />
              Female
            </label>
          </div>

          {/* Display error message if exists */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="button"
            onClick={sendSignup}
            className="py-4 text-white bg-[#e63946] rounded-xl text-lg font-semibold font-poppins hover:bg-[#a8dadc] transition-all duration-200 hover:scale-105"
          >
            Let's Get Started!
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600 font-poppins">
          Already have an account? <a href="/login" className="text-[#457b9d] hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
