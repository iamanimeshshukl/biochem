import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Biometacon = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Entry animation for text content using GSAP
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="relative overflow-hidden h-[50vh] m-4 flex items-center justify-center text-center  from-indigo-50 via-purple-50 to-pink-50">
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
          . Scheduled for <span className="font-semibold text-orange-500">29th-31st March 2025</span>, this event will bring together industry leaders and academic pioneers to address pressing global challenges.
        </p>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-justify">
          Join us at <span className="font-semibold">HBTU Kanpur</span> to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering.
        </p>
      </motion.div>
    </div>
  );
};

export default Biometacon;
