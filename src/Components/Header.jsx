import React from 'react';
import headerbg from "src/assets/headerbg.png"
import mobileheader from "src/assets/mobileheader.png"
const Header = () => {
  return (
    <div className='w-full'>
      {/* Desktop Image */}
      <img 
        className='hidden md:block h-[40%] w-full object-contain' 
        src={headerbg}
        alt="Header Background for Desktop" 
      />
      {/* Mobile Image */}
      <img 
        className='block md:hidden h-auto w-full object-contain' 
        src={mobileheader}
        alt="Header Background for Mobile" 
      />
    </div>
  );
};

export default Header;
