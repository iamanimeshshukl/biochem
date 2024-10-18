import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  // Animation variants for the timeline events
  const eventVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 }, // Start smaller and below
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        bounce: 0.3,
      },
    },
    exit: { opacity: 0, scale: 0.8, y: -50 }, // Exit with reverse direction when scrolling up
  };

  // Line draw animation for the vertical line
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: 'calc(100% + 180px)',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    exit: { height: 0 }, // Reset line when exiting the viewport
  };

  // Sequential animation for circle and text elements
  const staggeredVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Animate child components sequentially
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: 20 }, // Exit when scrolling out of view
  };

  // Hover effect on the events for an interactive feel
  const hoverEffect = {
    whileHover: { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' },
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">Event Timeline</h2>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Vertical Line with animation */}
        <motion.div
          className="border-2 absolute border-opacity-40 border-gradient-to-b from-blue-500 to-purple-500 left-1/2 transform -translate-x-1/2"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}
          variants={lineVariants}
        />

        {/* Timeline Events */}
        <div className="relative wrap overflow-hidden">
          {/* First Event */}
          <motion.div
            className="mb-12 flex justify-between items-center w-full right-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            {...hoverEffect}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl w-16 h-16 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                1
              </motion.h1>
              <motion.div
                className="absolute left-16 top-1/2 w-[120px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-xl text-center">Abstract Submission Start</h3>
              <p className="text-white text-lg leading-tight text-center">15/10/2024</p>
            </motion.div>
          </motion.div>

          {/* Second Event */}
          <motion.div
            className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            {...hoverEffect}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl w-16 h-16 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                2
              </motion.h1>
              <motion.div
                className="absolute right-16 top-1/2 w-[120px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-xl text-center">Abstract Submission End</h3>
              <p className="text-white text-lg leading-tight text-center">30/12/2024</p>
            </motion.div>
          </motion.div>

          {/* Third Event */}
          <motion.div
            className="mb-12 flex justify-between items-center w-full right-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            {...hoverEffect}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl w-16 h-16 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                3
              </motion.h1>
              <motion.div
                className="absolute left-16 top-1/2 w-[120px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-xl text-center">Announcement of Acceptance</h3>
              <p className="text-white text-lg leading-tight text-center">05/01/2025</p>
            </motion.div>
          </motion.div>

          {/* Fourth Event */}
          <motion.div
            className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            {...hoverEffect}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl w-16 h-16 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                4
              </motion.h1>
              <motion.div
                className="absolute right-16 top-1/2 w-[120px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-xl text-center">Last Date of Registration</h3>
              <p className="text-white text-lg leading-tight text-center">05/02/2025</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
