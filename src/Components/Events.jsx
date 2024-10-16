import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the appearance
            >
              <div className="flex gap-4 items-start">
                <img
                  className="w-12 h-12 rounded-full"
                  src={`https://randomuser.me/api/portraits/women/${index + 2}.jpg`} // Update with a different image source if needed
                  alt="user avatar"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      {index % 2 === 0 ? 'Sustainable Bioprocesses and Products' : `User ${index + 1}`}
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
