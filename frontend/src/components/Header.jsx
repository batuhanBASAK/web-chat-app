import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className='p-4 w-full'>
      <a href="/" className="text-lg md:text-2xl font-light">WebChatApp</a>
    </header>
  );
}

export default Header