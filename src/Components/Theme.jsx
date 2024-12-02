import React from "react";
import { motion } from "framer-motion";

const MarqueeNews = () => {
  const newsItems = [
    "Welcome to one of the Happiest Cities in the World",
    "International Conference BIO-METACON 2025",
    "March 29th-31st, 2025, Harcourt Butler Technical University (HBTU), Kanpur, India",
    "Abstract Submission Start 01/12/2024.",
    "Abstract Submission End 15/01/2025.",
  ];

  return (
    <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 py-4">
      <div className="overflow-hidden relative">
        <motion.div
          className="whitespace-nowrap flex text-white font-semibold text-lg md:text-2xl"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 60, // Further increased duration for even slower animation
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ display: "inline-flex" }} // Ensure inline flex for smooth scrolling
        >
          {[...newsItems, ...newsItems].map((item, index) => (
            <motion.span
              key={index}
              className="mx-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeNews;
