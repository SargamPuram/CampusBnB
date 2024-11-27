import React, { useRef } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const formRef = useRef(); 

  async function sendLogin(event) {
    event.preventDefault(); 

    const formData = new FormData(formRef.current);

    try{
    let response = await axios.post('http://localhost:8000/users/user/', {
      username: formData.get('username'),
      password: formData.get('password')
    }, )
    console.log(response.data)
    if(response.data){
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("accessToken", response.data.access_token);
      console.log(localStorage.getItem("accessToken"))
    }
    }catch(e){
      console.log("error occured");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 p-4">
        <h1 className="text-center text-2xl mb-4">LoginPage</h1>
        <form ref={formRef} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
       
          />
          <input
            type="password"
            name="password"
            placeholder="Please Enter your password"
          />
          <input
            type="text"
            name="stud_id"
            placeholder="Please Enter Student Id"
          />
          <input
            type="email"
            name="stud_email"
            placeholder="Enter Email"
          />
          <button 
          type="button" 
          onClick={sendLogin}
          className='bg-slate-400 py-4 px-4'
          >Submit Here</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
