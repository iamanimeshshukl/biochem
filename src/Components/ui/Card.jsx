import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import committeeData from '../../desgination_data/data';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
};

const Card = () => {
  return (
    <div className="flex flex-col items-center bg-white py-12 px-4 sm:px-6 lg:px-8">
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
            className="text-2xl sm:text-3xl font-bold mb-8 text-blue-800 uppercase tracking-wide"
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
              const isInView = useInView(cardRef, { once: false }); // Allow the card to animate multiple times

              // GSAP effect when the card comes into view
              React.useEffect(() => {
                if (isInView) {
                  gsap.fromTo(cardRef.current, 
                    { scale: 0.8, opacity: 0 }, 
                    { scale: 1, opacity: 1, duration: 0.6, delay: memberIndex * 0.2 }
                  );
                }
              }, [isInView, memberIndex]);

              return (
                <motion.div
                  ref={cardRef} // Attach ref to the card
                  key={memberIndex}
                  className="relative max-w-xs w-full sm:w-80 mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the card is in view
                >
                  {/* Member Image */}
                  <div className="absolute -mt-16 w-full flex justify-center">
                    <div className="h-36 w-36 border-4 border-white rounded-full overflow-hidden shadow-md">
                      <motion.img
                        src={member.img} // Dynamically use the image from the data
                        className="object-cover h-full w-full"
                        alt={member.name}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 mt-20 pb-6">
                    {/* Member Name */}
                    <motion.h1
                      className="font-semibold text-xl sm:text-2xl text-center mb-2 text-gray-900"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.name}
                    </motion.h1>

                    {/* Member Title */}
                    <p className="text-gray-600 text-sm text-center italic">
                      {section.title}
                    </p>

                    {/* Description (Optional) */}
                    <p className="text-center text-gray-500 text-base pt-4 font-light">
                      {`Working with ${member.name.split(' ')[0]} has been an absolute pleasure. Their dedication and attention to detail is unmatched.`}
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
