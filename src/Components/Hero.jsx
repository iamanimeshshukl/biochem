import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Change to 'once: false' to animate on both enter and exit

  return (
    <section
      ref={ref}
      className="relative flex h-[100vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200 dark:to-gray-900 opacity-30 pointer-events-none"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl md:text-6xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block">1st Announcement</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            International Conference
          </span>
        </motion.h1>

        {/* Subtitle Section */}
        <motion.div
          className="mt-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            BIO-METACON <span className="text-blue-600">2025</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-lg text-gray-600 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          "Advances in Biorefineries: Opportunities and Challenges"
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="mt-8 sm:flex sm:justify-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSefwJ1oVHbNPddXyknDFNTlklR3ms9Sa_cDhykw1lrge7Ptbw/viewform?usp=sharing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-pink-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-gradient-to-l hover:from-cyan-600 hover:to-blue-500 transition-transform transform hover:scale-105"
          >
            Abstract Submission Link 🚀
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Background SVG */}
      <motion.svg
        className="absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] opacity-20 dark:opacity-30"
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: isInView ? 1 : 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <circle cx="400" cy="400" r="350" stroke="#4A90E2" strokeWidth="100" />
      </motion.svg>
    </section>
  );
};

export default Hero;
