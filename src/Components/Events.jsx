import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Events = () => {
  // Animation variants for each card
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Container variant for staggering children animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
        <div className="py-4 text-center md:py-8">
          <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-500">
            THEME OF CONFERENCE
          </h4>
          <motion.p
            className="mt-2 tracking-tight text-gray-800 text-xl md:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            International Conference BIO-METACON 2025
          </motion.p>
        </div>

        {/* Animate the container for the event cards */}
        <motion.div
          className="gap-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {Array.from({ length: 7 }).map((_, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: false });

            return (
              <motion.div
                ref={cardRef}
                key={index}
                className="relative p-8 bg-gradient-to-br from-yellow-100 to-blue-100 shadow-md aspect-auto rounded-3xl overflow-hidden"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div className="flex gap-4 items-start">
                  <motion.img
                    className="w-12 h-12 rounded-full border-2 border-white"
                    src={`https://randomuser.me/api/portraits/women/${index + 10}.jpg`}
                    alt="user avatar"
                    width={200}
                    height={200}
                    loading="lazy"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h6 className="text-lg font-semibold text-gray-800">
                      {index % 2 === 0
                        ? 'Sustainable Bioprocesses and Products'
                        : `User ${index + 1}`}
                    </h6>
                    <p className="text-sm text-gray-600">
                      {index % 2 === 0 ? 'Researcher' : 'Professional'}
                    </p>
                  </motion.div>
                </motion.div>
                <p className="mt-8 text-gray-700">
                  {index % 2 === 0
                    ? 'Discussion on various sustainable processes and products.'
                    : 'Great insights on market trends and product development.'}
                </p>
                {/* Add floating icons for flair */}
                <motion.div
                  className="absolute top-2 right-4 text-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <i className="fas fa-leaf"></i>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default Events;
