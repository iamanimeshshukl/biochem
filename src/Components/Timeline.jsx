import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Timeline = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    // GSAP animation for drawing the vertical timeline line
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "calc(85%)",
        duration: 2,
        ease: "power3.inOut",
      }
    );
  }, []);

  // Framer Motion animation variants for timeline events
  const eventVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, scale: 0.75, y: -60 },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30 },
  };

  const hoverEffect = {
    whileHover: { scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)" },
  };

  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Event Timeline</h2>
      </div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        {/* Vertical Line Animation */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 border-2 border-opacity-50 bg-gradient-to-b from-green-400 to-blue-500"
          style={{ width: "6px", height: "calc(85%)" }}
        ></div>

        <div className="relative wrap overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            {[
              {
                id: 1,
                title: "Abstract Submission Start",
                date: "1/12/2024",
                alignment: "right",
              },
              {
                id: 2,
                title: "Abstract Submission End",
                date: "15/01/2025",
                alignment: "left",
              },
              {
                id: 3,
                title: "Announcement of Acceptance",
                date: "20/01/2025",
                alignment: "right",
              },
              {
                id: 4,
                title: "Last Date of Online Registration",
                date: "05/02/2025",
                alignment: "left",
              },
            ].map((event) => (
              <motion.div
                key={event.id}
                className={`mb-12 flex justify-between items-center w-full ${
                  event.alignment === "right"
                    ? "right-timeline"
                    : "left-timeline flex-row-reverse"
                }`}
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                {...hoverEffect}
              >
                <div className="order-1 w-5/12 lg:w-6/12"></div>
                <motion.div
                  className="z-20 flex items-center order-1 bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg w-14 h-14 rounded-full relative"
                  variants={childVariants}
                >
                  <motion.h1
                    className="mx-auto font-semibold text-lg text-white"
                    variants={childVariants}
                  >
                    {event.id}
                  </motion.h1>
                  <motion.div
                    className={`absolute ${
                      event.alignment === "right" ? "left-14" : "right-14"
                    } top-1/2 w-[120px] h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 opacity-50 z-10`}
                    variants={childVariants}
                  />
                </motion.div>
                <motion.div
                  className="order-1 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-xl shadow-md w-7/12 lg:w-6/12 px-6 py-4 z-20"
                  variants={childVariants}
                >
                  <h3 className="mb-3 font-medium text-lg text-center">
                    {event.title}
                  </h3>
                  <p className="text-white text-sm leading-snug text-center">
                    {event.date}
                  </p>
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
