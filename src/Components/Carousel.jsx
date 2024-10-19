import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

// Importing images from assets
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

const Carousel = () => {
  const slides = [image1, image2, image3]; // Images from assets folder
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play logic for manual Framer Motion usage
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Responsive Carousel with Framer Motion Animations */}
      <ResponsiveCarousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        infiniteLoop
        autoPlay
        interval={3000}
        className="overflow-visible"
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen md:h-screen sm:h-[50vh] xs:h-[40vh]">
            <motion.img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensure image covers the full area
              initial={{ opacity: 0, scale: 1.1 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Animate to this state
              exit={{ opacity: 0, scale: 0.9 }} // Exit animation
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.05, rotate: 1 }} // 3D effect on hover
            />
          </div>
        ))}
      </ResponsiveCarousel>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
