import React from 'react';

const Header = () => {
  return (
    <div className='w-full'>
      {/* Desktop Image */}
      <img 
        className='hidden md:block h-[40%] w-full object-contain' 
        src="src/assets/headerbg.png" 
        alt="Header Background for Desktop" 
      />
      {/* Mobile Image */}
      <img 
        className='block md:hidden h-auto w-full object-contain' 
        src="src/assets/mobileheader.png" 
        alt="Header Background for Mobile" 
      />
    </div>
  );
};

export default Header;
