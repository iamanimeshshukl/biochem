import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Biometacon = () => {
  const textRef = useRef(null);
  const svgBackgroundRef = useRef(null);

  useEffect(() => {
    // Subtle entry animation for text content using GSAP
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Update bubble animation with a more subtle, smooth motion effect
    gsap.to(svgBackgroundRef.current.children, {
      y: () => Math.random() * 20 - 10, // Smooth motion within a smaller range
      x: () => Math.random() * 20 - 10,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* SVG Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden" ref={svgBackgroundRef}>
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="absolute opacity-25">
          {/* New color palette for bubbles */}
          <circle cx="200" cy="200" r="100" fill="#FFD54F" />
          <circle cx="600" cy="300" r="150" fill="#FF7043" />
          <circle cx="300" cy="600" r="80" fill="#4FC3F7" />
          <circle cx="700" cy="700" r="120" fill="#81C784" />
          <circle cx="100" cy="500" r="50" fill="#BA68C8" />
        </svg>
      </div>

      {/* Content Section */}
      <motion.div
        className="relative z-10 max-w-3xl p-6 rounded-lg bg-white bg-opacity-90 shadow-lg text-gray-800"
        ref={textRef}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-indigo-600">BIO-METACON 2025</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          The Department of Biochemical Engineering, HBTU Kanpur, proudly presents "BIO-METACON 2025," 
          a premier international conference centered around the theme "Sustainable Innovation and Challenges:
          Recent Trends in Bioengineering." Scheduled for 3rd-5th March 2025, this event will bring together
          industry leaders and academic pioneers to address pressing global challenges.
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-600">
          Join us at HBTU Kanpur to engage with thought leaders, share groundbreaking research, and 
          contribute to shaping the future of bioengineering.
        </p>
      </motion.div>
    </div>
  );
};

export default Biometacon;
