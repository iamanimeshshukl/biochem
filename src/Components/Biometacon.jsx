import React, { useEffect, useRef } from 'react';
import img from '../assets/BIO-METACON Logo.png';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Biometacon = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const floatingCircles = useRef([]);

  useEffect(() => {
    // GSAP animation for the image (3D rotation and fade-in)
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, rotateY: 90, scale: 0.8 },
      { opacity: 1, rotateY: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
    );

    // GSAP animation for the text (3D rotation and fade-in)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, rotateX: -90, y: 50 },
      { opacity: 1, rotateX: 0, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    // GSAP animation for floating circles
    floatingCircles.current.forEach(circle => {
      gsap.to(circle, {
        x: () => Math.random() * 100 - 50,  // Move horizontally within a random range
        y: () => Math.random() * 100 - 50,  // Move vertically within a random range
        repeat: -1,
        yoyo: true,
        duration: () => 4 + Math.random() * 2, // Random duration for each circle
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {Array(5).fill().map((_, i) => (
          <svg
            key={i}
            className="absolute"
            ref={el => floatingCircles.current[i] = el}  // Reference each circle for GSAP animation
            width="100"
            height="100"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#4F46E5" opacity="0.4" />
          </svg>
        ))}
      </div>

      <div className="relative z-10 sm:flex items-center max-w-screen-xl">
        <motion.div
          className="sm:w-1/2 p-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="image object-center text-center">
            <img src={img} ref={imgRef} alt="BIO-METACON Logo" />
          </div>
        </motion.div>
        <motion.div
          className="sm:w-1/2 p-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="text" ref={textRef}>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Biometacon 2025</span>
            </h2>
            <p className="text-gray-700">
              The Department of Biochemical Engineering, HBTU Kanpur, proudly presents "BIO-METACON 2025," a premier international conference centered around the theme "Sustainable Innovation and Challenges: Recent Trends in Bioengineering." Scheduled for 3rd-5th March 2025, this event aims to foster discussions and collaborations among leading academics, researchers, and industry experts in the field of Bioengineering.
            </p>
            <p className="text-gray-700">
              BIO-METACON 2025 will provide a dynamic platform to explore the latest advancements and emerging challenges in bioengineering, focusing on sustainable innovation in biotechnology, biochemical processes, and bio-product development. Attendees will have the opportunity to participate in keynote sessions, technical presentations, panel discussions, and workshops led by distinguished speakers from both academia and industry.
            </p>
            <p className="text-gray-700">
              The conference encourages knowledge exchange, networking, and collaboration to address critical global challenges such as climate change, sustainable development, and health care. Join us at HBTU Kanpur to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biometacon;
