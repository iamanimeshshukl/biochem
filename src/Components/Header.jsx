import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import logo2 from "../assets/BIO-METACON_Logo-removebg-preview.png";
import hbtu from '../assets/hbtu logo.png';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-blue-400 py-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        
        {/* Left logo with subtle scaling and glow effect */}
        <motion.img
          src={logo2}
          className="h-[15vh] md:h-20 lg:h-[20vh] mb-4 md:mb-0 cursor-pointer filter brightness-150"
          alt="BIO-METACON Logo"
          whileHover={{
            scale: 1.1,
            rotate: 10,
            filter: "brightness(1.3)",
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Title with elegant scale and fade effect */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className='text-3xl'>International Conference</span> <br /> Bio-Metacon 2025
          <br /> <span className='text-xl'>Advances in Biorefineries: Opportunity and Challenges</span>
        </motion.h1>

        {/* Right logo with hover scaling and rotation */}
        <motion.img
          src={hbtu}
          className="h-[15vh] md:h-20 lg:h-[20vh] mb-4 md:mb-0 cursor-pointer filter brightness-150"
          alt="HBTU Logo"
          whileHover={{
            scale: 1.1,
            rotate: 10,
            filter: "brightness(1.3)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Conference details with elegant slide and fade animation */}
      <motion.div
        className="text-center text-sm md:text-base text-white mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-opacity-90 py-2 px-4 md:px-6 rounded-full shadow-lg inline-block text-white text-xs md:text-sm font-bold">
          Harcourt Butler Technical University, Kanpur 208002, India
        </p>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-0 left-[5%] w-[25%] h-[25%] md:w-40 md:h-40 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-[5%] w-[25%] h-[25%] md:w-40 md:h-40 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </header>
  );
};

export default Header;
