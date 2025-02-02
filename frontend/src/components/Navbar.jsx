import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header
        className="relative bg-cover bg-center bg-no-repeat h-60 sm:h-80 md:h-96"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-12">
          {/* Logo and title */}
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2711/2711428.png"
              alt="Jewellery Symbol"
              className="w-10 sm:w-12 rounded-full"
            />
            <h1 className="text-2xl sm:text-3xl font-bold italic text-white font-mono tracking-wide shadow-lg">
              Sourabh Jewellers
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm sm:text-base">
            <div
              className="text-white font-medium hover:underline hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
