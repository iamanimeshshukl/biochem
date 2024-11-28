import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import committeeData from '../../desgination_data/data';

// SVG Bubble Background Component
const BubblesBackground = () => {
  const bubbleCount = 15; // Number of bubbles to generate
  const bubbles = Array.from({ length: bubbleCount });

  return (
    <svg
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      {bubbles.map((_, index) => {
        // Random initial positions and sizes for each bubble
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 50 + 10;

        return (
          <circle
            key={index}
            cx={`${x}%`}
            cy={`${y}%`}
            r={size}
            fill={`rgba(100, 150, 255, ${Math.random() * 0.2 + 0.1})`}
            style={{
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
              transformOrigin: 'center',
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(10px, -15px);
            }
          }
        `}
      </style>
    </svg>
  );
};

// Card Component
const Card = () => {
  return (
    <div className="relative flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <BubblesBackground />
      {committeeData.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          className="w-full mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: sectionIndex * 0.2, duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-black uppercase tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {section.title}
          </motion.h2>

          {/* Member Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {section.members.map((member, memberIndex) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, { once: false });

              useEffect(() => {
                if (isInView) {
                  gsap.fromTo(
                    cardRef.current,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, delay: memberIndex * 0.2 }
                  );
                }
              }, [isInView, memberIndex]);

              return (
                <motion.div
                  ref={cardRef}
                  key={memberIndex}
                  className="relative max-w-xs w-full sm:w-80 mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -mt-16 w-full flex justify-center">
                    <div className="h-36 w-36 border-4 border-white rounded-full overflow-hidden shadow-md">
                      <motion.img
                        src={member.img}
                        className="object-cover h-full w-full"
                        alt={member.name}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  <div className="px-6 mt-20 pb-6">
                    <motion.h1
                      className="font-semibold text-xl sm:text-2xl text-center mb-2 text-gray-900"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.name}
                    </motion.h1>

                    <p className="text-gray-600 text-sm text-center italic">
                      {section.title}
                    </p>

                    <p className="text-center text-gray-500 text-base pt-4 font-light">
                      {`Working with ${member.name.split(' ')[0]} has been an absolute pleasure. Their dedication and attention to detail are unmatched.`}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
