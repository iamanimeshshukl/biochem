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
        ease: "easeOut",
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
        ease: "easeInOut",
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 20 }, // Exit when scrolling out of view
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Event Timeline</h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          {/* Vertical Line with animation */}
          <motion.div
            className="border-2 absolute border-opacity-20 border-gray-500 left-1/2"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }} // Animation can trigger multiple times on scroll
            variants={lineVariants}
          />

          {/* First Event */}
          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
          >
            <div className="order-1 w-5/12" />
            <motion.div
              className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                1
              </motion.h1>
              <motion.div
                className="absolute left-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-white text-xl text-center">Abstract Submission Start</h3>
              <p className="text-white text-lg leading-tight text-center">15/10/2024</p>
            </motion.div>
          </motion.div>

          {/* Second Event */}
          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
          >
            <div className="order-1 w-5/12" />
            <motion.div
              className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                2
              </motion.h1>
              <motion.div
                className="absolute right-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-white text-xl text-center">Abstract Submission End</h3>
              <p className="text-white text-lg leading-tight text-center">30/12/2024</p>
            </motion.div>
          </motion.div>

          {/* Third Event */}
          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
          >
            <div className="order-1 w-5/12" />
            <motion.div
              className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                3
              </motion.h1>
              <motion.div
                className="absolute left-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-white text-xl text-center">Announcement of Acceptance of Abstract</h3>
              <p className="text-white text-lg leading-tight text-center">05/01/2025</p>
            </motion.div>
          </motion.div>

          {/* Fourth Event */}
          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
          >
            <div className="order-1 w-5/12" />
            <motion.div
              className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative"
              variants={staggeredVariants}
            >
              <motion.h1 className="mx-auto font-semibold text-lg text-white" variants={childVariants}>
                4
              </motion.h1>
              <motion.div
                className="absolute right-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10"
                variants={childVariants}
              />
            </motion.div>
            <motion.div
              className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20"
              variants={childVariants}
            >
              <h3 className="mb-2 font-bold text-white text-xl text-center">Last date of Online Registration</h3>
              <p className="text-white text-lg leading-tight text-center">05/02/2025</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
