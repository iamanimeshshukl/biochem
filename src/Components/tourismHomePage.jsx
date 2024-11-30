import React from 'react';
import { motion } from 'framer-motion';
import iskcon from '../assets/places/iskcon-kanpur.jpg';
import blueWorld from '../assets/places/BlueWorld.jpg';
import motiJheel from '../assets/places/MotiJheel.jpg';
import jkTemple from '../assets/places/JK-Temple.jpg';

const TourismHomePage = () => {
  // Define animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } },
    hover: { scale: 1.05, rotate: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-6 lg:py-12 space-y-12 flex flex-col justify-center">
          {/* Section Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <br></br>
            <h2 className="text-3xl my-4 sm:text-4xl  md:text-4xl font-extrabold text-gray-800">
              Places To Visit Nearby Kanpur
            </h2>
            <p className="mt-4 text-md md:text-lg text-gray-500">
              Explore the best spots to visit in Kanpur during the conference.
            </p>
          </motion.div>

          {/* Image Cards Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {/* First Card: ISKCON Kanpur */}
            <motion.a
              href="#_"
              variants={cardVariants}
              whileHover="hover"
              className="w-full h-[250px] relative transform rotate-6 hover:rotate-0 transition duration-500 z-10"
            >
              <motion.img
                src={iskcon}
                className="rounded-xl object-cover w-full h-full shadow-lg"
                alt="ISKCON Kanpur"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </motion.a>

            {/* Second Card: Blue World */}
            <motion.a
              href="#_"
              variants={cardVariants}
              whileHover="hover"
              className="w-full h-[250px] relative transform -rotate-12 hover:rotate-0 transition duration-500 z-20"
            >
              <motion.img
                src={blueWorld}
                className="rounded-xl object-cover w-full h-full shadow-lg"
                alt="Blue World"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </motion.a>

            {/* Third Card: Moti Jheel */}
            <motion.a
              href="#_"
              variants={cardVariants}
              whileHover="hover"
              className="w-full h-[250px] relative transform rotate-6 hover:rotate-0 transition duration-500 z-10"
            >
              <motion.img
                src={motiJheel}
                className="rounded-xl object-cover w-full h-full shadow-lg"
                alt="Moti Jheel"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </motion.a>

            {/* Fourth Card: JK Temple */}
            <motion.a
              href="#_"
              variants={cardVariants}
              whileHover="hover"
              className="w-full h-[250px] relative transform -rotate-12 hover:rotate-0 transition duration-500 z-30"
            >
              <motion.img
                src={jkTemple}
                className="rounded-xl object-cover w-full h-full shadow-lg"
                alt="JK Temple"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TourismHomePage;
