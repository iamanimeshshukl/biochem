import React, { useState, useEffect } from 'react';

// Importing images from assets
import image1 from '../assets/img3.jpg';
import image2 from '../assets/img3.jpg';
import image3 from '../assets/img3.jpg';

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
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden relative w-full h-full">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
