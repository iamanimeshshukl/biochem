import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import logo2 from "../assets/BIO-METACON_Logo-removebg-preview.png";
import hbtu from '../assets/hbtu logo.png';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-blue-400 py-10 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        
        {/* Left logo with subtle scaling and glow effect */}
        <motion.img
          src={logo2}
          className="h-[150px] md:h-24 mb-4 md:mb-0 cursor-pointer filter brightness-150"
          alt="BIO-METACON Logo"
          whileHover={{ scale: 1.1, rotate: 10, filter: "brightness(1.3)" }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Title with elegant scale and fade effect */}
        <motion.h1
          className="text-center text-3xl md:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          International Conference <br /> BIO-METACON 2025
        </motion.h1>

        {/* Right logo with hover scaling and rotation */}
        <motion.img
          src={hbtu}
          className="h-[150px] md:h-24 mt-4 md:mt-0 cursor-pointer filter brightness-150"
          alt="HBTU Logo"
          whileHover={{ scale: 1.1, rotate: -10, filter: "brightness(1.3)" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Conference details with elegant slide and fade animation */}
      <motion.div
        className="text-center text-lg md:text-xl text-white mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="bg-purple-500 bg-opacity-90 py-4 px-6 md:px-10 rounded-full shadow-lg inline-block text-white">
          March 01-03, 2025, Harcourt Butler Technical University (HBTU), Kanpur, India
        </p>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-0 left-[5%] w-[30%] h-[30%] md:w-48 md:h-48 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-[5%] w-[30%] h-[30%] md:w-48 md:h-48 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </header>
  );
};

export default Header;