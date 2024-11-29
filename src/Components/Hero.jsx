import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        ref.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isInView]);

  const colors = ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA'];

  return (
    <section
      ref={ref}
      className="relative flex h-[100vh] items-center justify-center  overflow-hidden"
    >
      {/* Content Container */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl"
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
          <p className="text-3xl font-bold text-gray-900">
            BIO-METACON <span className="text-blue-600">2025</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-lg text-gray-600"
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-gradient-to-l transition-transform transform hover:scale-105"
          >
            Abstract Submission Details 🚀
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Bubble Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, index) => {
          const size = Math.random() * 60 + 20; // Random size between 20px and 80px
          return (
            <motion.div
              key={index}
              className="absolute rounded-full opacity-70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
