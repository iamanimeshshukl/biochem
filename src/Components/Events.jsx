import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const Events = () => {
  const svgBackgroundRef = useRef(null);

  useEffect(() => {
    // GSAP animation for bubbles moving in random directions
    gsap.to(svgBackgroundRef.current.children, {
      x: () => Math.random() * 100 - 50,  // Random horizontal movement
      y: () => Math.random() * 100 - 50,  // Random vertical movement
      duration: 8,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Moving Bubbles SVG Background */}
      <div className="absolute inset-0 z-0" ref={svgBackgroundRef}>
        <svg width="100%" height="100%" className="absolute opacity-20">
          <circle cx="200" cy="300" r="60" fill="#FFD54F" />
          <circle cx="600" cy="400" r="50" fill="#FF7043" />
          <circle cx="150" cy="600" r="30" fill="#4FC3F7" />
          <circle cx="700" cy="700" r="70" fill="#81C784" />
          <circle cx="300" cy="150" r="40" fill="#BA68C8" />
        </svg>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <section className="relative z-10 pb-12 mx-auto md:pb-20 max-w-7xl">
        <div className="py-4 text-center md:py-8">
          <h4 className="text-base font-bold tracking-wide text-center uppercase text-gray-700">
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
                className="relative p-8 bg-white shadow-xl aspect-auto rounded-3xl overflow-hidden border border-gray-200"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 10,
                  boxShadow: '0px 20px 40px rgba(0,0,0,0.2)',
                  transition: { duration: 0.4 },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div className="flex gap-4 items-start">
                  <motion.img
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    src={`https://randomuser.me/api/portraits/men/${index + 12}.jpg`}
                    alt="user avatar"
                    width={200}
                    height={200}
                    loading="lazy"
                    whileHover={{ scale: 1.3, rotateZ: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h6 className="text-lg font-semibold text-gray-700">
                      {index % 2 === 0
                        ? 'Sustainable Bioprocesses and Products'
                        : `User ${index + 1}`}
                    </h6>
                    <p className="text-sm text-gray-500">
                      {index % 2 === 0 ? 'Researcher' : 'Professional'}
                    </p>
                  </motion.div>
                </motion.div>
                <p className="mt-8 text-gray-600">
                  {index % 2 === 0
                    ? 'Discussion on various sustainable processes and products.'
                    : 'Great insights on market trends and product development.'}
                </p>
                <motion.div
                  className="absolute top-2 right-4 text-gray-400"
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
