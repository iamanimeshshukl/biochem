import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

// Importing images from assets
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

const Carousel = () => {
  const slides = [image1, image2, image3]; // Images from assets folder
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup interval
  }, [slides.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
<<<<<<< HEAD
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden relative w-full h-full">
        {/* Animate the image on change */}
        <motion.img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          key={currentIndex} // Ensure the key changes on index change to trigger animation
          initial={{ opacity: 0, scale: 1.1 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animate to this state
          exit={{ opacity: 0, scale: 0.9 }} // Exit animation
          transition={{ duration: 0.5 }} // Animation duration
        />
      </div>

      {/* Previous Button */}
      <motion.button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        whileHover={{ scale: 1.1 }} // Scale on hover
        transition={{ type: 'spring', stiffness: 300 }}
      >
        &#10094;
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        whileHover={{ scale: 1.1 }} // Scale on hover
        transition={{ type: 'spring', stiffness: 300 }}
      >
        &#10095;
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            whileHover={{ scale: 1.5 }} // Scale on hover
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
=======
    <div className="relative w-full h-screen md:h-1/4 lg:h-1/3 mx-auto">
    {/* Carousel Wrapper */}
    <div className="overflow-hidden relative w-full h-full">
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
>>>>>>> 2db6a8c0e614fe936558ee4caab219f26e061b67
    </div>
  
    {/* Previous Button */}
    <button
      onClick={goToPrevious}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-200 text-xs sm:text-sm md:text-lg"
    >
      &#10094;
    </button>
  
    {/* Next Button */}
    <button
      onClick={goToNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-200 text-xs sm:text-sm md:text-lg"
    >
      &#10095;
    </button>
  
    {/* Indicators */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
            index === currentIndex ? 'bg-white' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  </div>
  
  );
};

export default Carousel;
