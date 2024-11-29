import React, { useRef, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Redirect to the gallery page if authenticated
      navigate('/gallery');
    }
  }, [navigate]);

  async function sendLogin(event) {
    event.preventDefault();
    

    const formData = new FormData(formRef.current);

    try {
      let response = await axios.post('http://localhost:8000/api/login/', {
        username: formData.get('username'),
        password: formData.get('password'),
      });
      console.log(response.data);
      if (response.data) {
        localStorage.setItem('accessToken', response.data.access_token);
        console.log(localStorage.getItem('accessToken'));
        navigate('/gallery');
      }
    } catch (e) {
      console.log('Error occurred');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f1faee] to-[#a8dadc]">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl text-center text-[#e63946] mb-8 font-montserrat">Login</h1>
        <form ref={formRef} className="flex flex-col space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="p-4 text-lg border-2 border-[#457b9d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8dadc] font-poppins"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-4 text-lg border-2 border-[#457b9d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8dadc] font-poppins"
          />
          <button
            type="button"
            onClick={sendLogin}
            className="py-4 text-white bg-[#e63946] rounded-xl text-lg font-semibold font-poppins hover:bg-[#a8dadc] transition-all duration-200 hover:scale-105"
          >
            Submit
          </button>
        </form>
        <div>
        <h1>Haven't signed up yet?</h1> <Link to='/signup' className='text-red-300'>SignUp</Link>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
