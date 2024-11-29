import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Biometacon = () => {
  const textRef = useRef(null);
  const svgBackgroundRef = useRef(null);

  useEffect(() => {
    // Entry animation for text content using GSAP
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Smooth motion for background bubbles
    gsap.to(svgBackgroundRef.current.children, {
      y: () => Math.random() * 30 - 15,
      x: () => Math.random() * 30 - 15,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden h-screen m-4 flex items-center justify-center text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* SVG Animated Background */}
      <div className="absolute top-0 left-0 w-full h-[40vh] z-0 overflow-hidden" ref={svgBackgroundRef}>
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="absolute opacity-20">
          <circle cx="200" cy="200" r="100" fill="#FFD54F" />
          <circle cx="600" cy="300" r="150" fill="#FF7043" />
          <circle cx="300" cy="600" r="80" fill="#4FC3F7" />
          <circle cx="700" cy="700" r="120" fill="#81C784" />
          <circle cx="100" cy="500" r="50" fill="#BA68C8" />
        </svg>
      </div>

      {/* Content Section */}
      <motion.div
        className="relative z-10 max-w-4xl mx-4 p-4 md:p-8 rounded-lg bg-white bg-opacity-90 shadow-2xl text-gray-800"
        ref={textRef}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Welcome to <span className="text-orange-600">BIO-METACON 2025</span>
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-justify">
          The Department of Biochemical Engineering, HBTU Kanpur, proudly presents <span className="font-bold">BIO-METACON 2025</span>, 
          a premier international conference centered around the theme <span className="text-orange-500">"Advances in Biorefineries: Opportunity and Challenges"</span>
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 text-justify">
          Scheduled for <span className="font-semibold text-orange-500">29th-31st March 2025</span>, this event will bring together industry leaders and academic pioneers to address pressing global challenges.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 text-justify">
          Join us at <span className="font-semibold">HBTU Kanpur</span> to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering.
        </p>
      </motion.div>
    </div>
  );
};

export default Biometacon;
