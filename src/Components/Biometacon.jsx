import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Biometacon = () => {
  const textRef = useRef(null);
  const floatingShapes = useRef([]);
  const circleRadius = 40; // Radius of the circles
  const circleCount = 15; // Total number of circles
  const positions = []; // To store initial positions of circles

  useEffect(() => {
    const getRandomPosition = () => {
      const x = Math.random() * (window.innerWidth - circleRadius * 2) + circleRadius;
      const y = Math.random() * (window.innerHeight - circleRadius * 2) + circleRadius;
      return { x, y };
    };

    const isOverlapping = (newPos) => {
      return positions.some(pos => {
        const distance = Math.sqrt(
          (pos.x - newPos.x) ** 2 + (pos.y - newPos.y) ** 2
        );
        return distance < circleRadius * 2; // Check for collision
      });
    };

    // Get unique positions for each circle
    for (let i = 0; i < circleCount; i++) {
      let pos;
      do {
        pos = getRandomPosition();
      } while (isOverlapping(pos));
      positions.push(pos);
    }

    // GSAP animation for floating shapes
    floatingShapes.current.forEach((shape, index) => {
      const { x, y } = positions[index];
      gsap.set(shape, { x, y }); // Set initial position
      gsap.to(shape, {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        repeat: -1,
        yoyo: true,
        duration: () => 5 + Math.random() * 3,
        ease: 'power1.inOut',
        modifiers: {
          x: (x) => {
            const newX = parseFloat(x);
            // Check boundaries and reverse if needed
            if (newX < 0 || newX > window.innerWidth - circleRadius * 2) {
              return newX < 0 ? 0 : window.innerWidth - circleRadius * 2;
            }
            return x;
          },
          y: (y) => {
            const newY = parseFloat(y);
            // Check boundaries and reverse if needed
            if (newY < 0 || newY > window.innerHeight - circleRadius * 2) {
              return newY < 0 ? 0 : window.innerHeight - circleRadius * 2;
            }
            return y;
          },
        },
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center text-center bg-white">
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {Array(circleCount).fill().map((_, i) => (
          <svg
            key={i}
            className="absolute"
            ref={el => floatingShapes.current[i] = el}
            width="80"
            height="80"
            style={{
              top: `${positions[i]?.y}px`,
              left: `${positions[i]?.x}px`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            <circle cx="40" cy="40" r="40" fill={`hsl(${Math.random() * 360}, 70%, 50%)`} />
          </svg>
        ))}
      </div>

      {/* Full-Screen Text */}
      <motion.div
        className="relative z-10 text-gray-800 p-4 md:p-8"
        ref={textRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to <span className="text-black">Biometacon 2025</span>
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          The Department of Biochemical Engineering, HBTU Kanpur, proudly presents "BIO-METACON 2025," a premier international conference centered around the theme "Sustainable Innovation and Challenges: Recent Trends in Bioengineering." Scheduled for 3rd-5th March 2025, this event aims to foster discussions and collaborations among leading academics, researchers, and industry experts in the field of Bioengineering.
          <br /><br />
          BIO-METACON 2025 will provide a dynamic platform to explore the latest advancements and emerging challenges in bioengineering, focusing on sustainable innovation in biotechnology, biochemical processes, and bio-product development. Attendees will have the opportunity to participate in keynote sessions, technical presentations, panel discussions, and workshops led by distinguished speakers from both academia and industry.
          <br /><br />
          The conference encourages knowledge exchange, networking, and collaboration to address critical global challenges such as climate change, sustainable development, and health care. Join us at HBTU Kanpur to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering.
        </p>
      </motion.div>
    </div>
  );
};

export default Biometacon;
