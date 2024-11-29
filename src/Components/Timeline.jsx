import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Timeline = () => {
  const lineRef = useRef(null);
  const svgBackgroundRef = useRef(null);

  useEffect(() => {
    // GSAP animation for drawing the vertical timeline line
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: 'calc(90%)',
        duration: 1.5,
        ease: 'power2.inOut',
      }
    );

    // GSAP animation for moving bubbles in the background
    gsap.to(svgBackgroundRef.current.children, {
      x: () => Math.random() * 50 - 25, // Random x-axis motion
      y: () => Math.random() * 50 - 25, // Random y-axis motion
      duration: 6,
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

  // Framer Motion animation variants for timeline events
  const eventVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
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
    exit: { opacity: 0, scale: 0.8, y: -50 },
  };

  const staggeredVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    exit: { opacity: 0, x: 20 },
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Moving Bubbles SVG Background */}
      <div className="absolute inset-0 z-0" ref={svgBackgroundRef}>
        <svg width="100%" height="100%" className="absolute opacity-20">
          {/* Adding circles as bubbles */}
          <circle cx="200" cy="300" r="60" fill="#FFD54F" />
          <circle cx="600" cy="400" r="50" fill="#FF7043" />
          <circle cx="150" cy="600" r="30" fill="#4FC3F7" />
          <circle cx="700" cy="700" r="70" fill="#81C784" />
          <circle cx="300" cy="150" r="40" fill="#BA68C8" />
        </svg>
      </div>

      <div className="relative z-10 text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-900">Event Timeline</h2>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Vertical Line Animation */}
        <div
          ref={lineRef}
          className="border-2 absolute left-1/2 transform -translate-x-1/2 border-opacity-40 border-gradient-to-b from-blue-500 to-purple-500"
        ></div>

        <div className="relative wrap overflow-hidden">
          <div className="max-w-2xl mx-auto">
            {[{
              id: 1,
              title: 'Abstract Submission Start',
              date: '1/12/2024',
              alignment: 'right',
            },
            {
              id: 2,
              title: 'Abstract Submission End',
              date: '15/01/2025',
              alignment: 'left',
            },
            {
              id: 3,
              title: 'Announcement of Acceptance',
              date: '20/01/2025',
              alignment: 'right',
            },
            {
              id: 4,
              title: 'Last Date of Online Registration',
              date: '05/02/2025',
              alignment: 'left',
            },
            ].map((event, index) => (
              <motion.div
                key={event.id}
                className={`mb-10 flex justify-between items-center w-full ${
                  event.alignment === 'right' ? 'right-timeline' : 'left-timeline flex-row-reverse'
                }`}
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                {...hoverEffect}
              >
                <div className="order-1 w-5/12"></div>
                <motion.div
                  className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg w-12 h-12 rounded-full relative"
                  variants={staggeredVariants}
                >
                  <motion.h1 className="mx-auto font-semibold text-md text-white" variants={childVariants}>
                    {event.id}
                  </motion.h1>
                  <motion.div
                    className={`absolute ${
                      event.alignment === 'right' ? 'left-12' : 'right-12'
                    } top-1/2 w-[100px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 z-10`}
                    variants={childVariants}
                  />
                </motion.div>
                <motion.div
                  className="order-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg w-5/12 px-5 py-3 z-20"
                  variants={childVariants}
                >
                  <h3 className="mb-2 font-normal text-lg text-center">{event.title}</h3>
                  <p className="text-white text-sm leading-tight text-center">{event.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
