import React from 'react';
import logo from '../assets/BIO-METACON Logo.png';
import hbtu from '../assets/hbtu logo.png';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4 md:p-6 text-black shadow-lg'>
      {/* Left Logo */}
      <div className='flex justify-center mb-4 md:mb-0'>
        <img src={logo} className='w-16 h-16 md:w-20 md:h-20' alt="Bio-Metacon Logo" />
      </div>

      {/* Conference Title */}
      <div className='text-center md:text-left'>
        <h1 className='text-xl md:text-3xl font-semibold'>
        International Conference BIO-METACON 2025
        </h1>
      </div>

      {/* Right Logo */}
      <div className='flex justify-center mt-4 md:mt-0'>
        <img src={hbtu} className='w-16 h-16 md:w-20 md:h-20' alt="HBTU Logo" />
      </div>
    </div>
  );
};

export default Header;

