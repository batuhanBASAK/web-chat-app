import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


function Login() {

  document.body.classList.add("bg-slate-900");
  document.body.classList.add("text-white");

  const navigate = useNavigate();
  return (
    <div className='container mx-auto w-screen h-screen'>
      <Header />
      <h1>Login Page</h1>
      {/* Add your login form or content here */}
    </div>
  );
}

export default Login;