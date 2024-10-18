import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  // Animation variants for each logo
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Happy Customers
        </motion.h2>
        <motion.p
          className="pt-6 pb-8 text-base max-w-2xl text-center m-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat
          tempore blanditiis, eveniet quia accusantium.
        </motion.p>
        <motion.div
          className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            { src: 'https://www.svgrepo.com/show/442910/brand-apple.svg', alt: 'Apple' },
            { src: 'https://www.svgrepo.com/show/443329/brand-pixar.svg', alt: 'Pixar' },
            { src: 'https://www.svgrepo.com/show/443079/brand-geforce.svg', alt: 'Geforce' },
            { src: 'https://www.svgrepo.com/show/443042/brand-ethereum.svg', alt: 'Ethereum' },
            { src: 'https://www.svgrepo.com/show/443206/brand-line.svg', alt: 'Line' },
            { src: 'https://www.svgrepo.com/show/519278/slack.svg', alt: 'Slack' },
          ].map((logo, index) => (
            <motion.a
              key={index}
              href="#_"
              target="_blank"
              variants={logoVariants}
              whileHover="hover"
              className="mx-auto"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-20 object-contain"
                whileHover={{ scale: 1.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
