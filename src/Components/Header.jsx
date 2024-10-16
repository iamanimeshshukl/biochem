import React from 'react';
import logo from '../assets/BIO-METACON Logo.png';
import hbtu from '../assets/hbtu logo.png';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-100 to-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        {/* Left logo with subtle hover effect */}
        <img
          src={logo}
          className="h-16 md:h-20 mb-4 md:mb-0 transition-transform transform hover:scale-105 duration-300"
          alt="BIO-METACON Logo"
        />
        
        {/* Professional title */}
        <h1 className="text-center text-2xl md:text-4xl font-semibold text-gray-800">
          International Conference BIO-METACON 2025
        </h1>

        {/* Right logo with hover effect */}
        <img
          src={hbtu}
          className="h-16 md:h-20 mt-4 md:mt-0 transition-transform transform hover:scale-105 duration-300"
          alt="HBTU Logo"
        />
      </div>

      {/* Conference details */}
      <div className="text-center text-lg md:text-xl text-gray-600 mt-4">
        <p className="bg-white bg-opacity-90 py-2 px-6 rounded-full shadow-sm inline-block">
          March 03-05, 2025, Harcourt Butler Technical University (HBTU), Kanpur, India
        </p>
      </div>
    </header>
  );
};

export default Header;


