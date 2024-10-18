import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'; // Renaming to avoid conflict

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
    <div className="relative w-full mx-auto">
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
        className="overflow-visible" // Make sure the carousel is not cropped
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen">
            <motion.img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain" // Ensure image doesn't crop and is fully visible
              initial={{ opacity: 0, scale: 1.1 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Animate to this state
              exit={{ opacity: 0, scale: 0.9 }} // Exit animation
              transition={{ duration: 0.5 }} // Animation duration
            />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
