import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Events = () => {
  // Animation variants for each card
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below the view
    visible: { opacity: 1, y: 0 }, // Animate to full opacity and move up
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
          <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-600">
            THEME OF CONFERENCE
          </h4>
          <p className="mt-2 tracking-tight text-gray-900 text:xl md:text-2xl">
            International Conference BIO-METACON 2025
          </p>
        </div>

        {/* Animate the container for the event cards */}
        <motion.div
          className="gap-8 space-y-8 md:columns-2 lg:columns-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {Array.from({ length: 7 }).map((_, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: false }); // Change to false for multiple triggers

            return (
              <motion.div
                ref={cardRef} // Attach ref to the card
                key={index}
                className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Control animation based on visibility
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Added hover effect
                viewport={{ once: false, amount: 0.3 }} // Trigger animation when 30% of the card is in view
              >
                <div className="flex gap-4 items-start">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={`https://randomuser.me/api/portraits/women/${index + 2}.jpg`} 
                    alt="user avatar"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <h6 className="text-lg font-medium text-gray-700">
                        {index % 2 === 0
                          ? 'Sustainable Bioprocesses and Products'
                          : `User ${index + 1}`}
                      </h6>
                      <p className="text-sm text-gray-500">
                        {index % 2 === 0 ? 'Researcher' : 'Professional'}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-8">
                  {index % 2 === 0
                    ? 'Discussion on various sustainable processes and products.'
                    : 'Great insights on market trends and product development.'}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default Events;
