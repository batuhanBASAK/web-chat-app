import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


function App() {

  document.body.classList.add("bg-slate-900");
  document.body.classList.add("text-white");


  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate('/login');
  };

  const handleSignupButton = () => {
    navigate('/signup');
  };


  return (
    <div className='container mx-auto w-screen h-screen'>
      <Header />
      <div className='bg-slate-800 w-full max-w-[768px] p-4 flex flex-col items-center justify-center gap-4 rounded-lg shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div>
          <h1 className='text-lg mb-4 text-center'>What is WebChatApp?</h1>
          <p className='mb-1'>WebChatApp is a web base chatting application that you can register and chat with your friends from your browser!</p>
          <p>What are you waiting for! Start chatting now!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={handleLoginButton} className='bg-slate-900 text-lg px-4 py-1 hover:bg-slate-800 rounded-md uppercase hover:underline' id="login-button">login</button>
          <button onClick={handleSignupButton} className='bg-slate-900 text-lg px-4 py-1 hover:bg-slate-800 rounded-md uppercase hover:underline' id="signup-button">signup</button>
        </div>
      </div>
    </div>
  )
}

export default App
