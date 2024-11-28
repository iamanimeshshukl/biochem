import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const topLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  // GSAP animation for the hamburger icon
  useEffect(() => {
    if (menuOpen) {
      gsap.to(topLineRef.current, { rotate: 45, y: 7, duration: 0.4 });
      gsap.to(middleLineRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(bottomLineRef.current, { rotate: -45, y: -7, duration: 0.4 });
    } else {
      gsap.to(topLineRef.current, { rotate: 0, y: 0, duration: 0.4 });
      gsap.to(middleLineRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(bottomLineRef.current, { rotate: 0, y: 0, duration: 0.4 });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Framer Motion variants for text links
  const linkVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: 'easeInOut' } 
    },
    hover: {
      scale: 1.2, 
      rotate: 5, 
      color: '#FFD700', 
      transition: { duration: 0.3 }
    }
  };

  // Staggering animations for the links (one after another)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Links will appear with a small delay between them
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Navbar sliding from the top
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-blue-800"
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }} // Bounce effect for the icon
            className="inline-flex items-center space-x-2"
          >
            <div className="hidden grow items-start lg:flex">
              <motion.ul
                className="ml-12 inline-flex space-x-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants} // Staggered animation
              >
                {[
                  { label: 'Home', href: '/home' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Abstracts', href: '/abstracts' },
                  { label: 'Publications', href: '/publications' },
                  { label: 'Scientific Programs', href: '/scientific-programs' },
                  { label: 'Registration & Sponsorship', href: '/registration-sponsorship' },
                  { label: 'Discover Kanpur', href: '/general-info' },
                  { label: 'IBS Team', href: '/ibs-team' },
                  { label: 'Contacts', href: '/contacts' }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants} // Hover and entrance animations for links
                    whileHover="hover"
                  >
                    <a href={link.href} className="text-sm font-semibold text-white">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <motion.div
                className="space-y-1"
                whileHover={{ scale: 1.2, rotate: 15 }} // Rotation on hover for hamburger
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
              >
                <div ref={topLineRef} className="h-1 w-6 bg-white"></div>
                <div ref={middleLineRef} className="h-1 w-6 bg-white"></div>
                <div ref={bottomLineRef} className="h-1 w-6 bg-white"></div>
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion and bounce effect */}
        <motion.div
          className="lg:hidden bg-blue-700"
          initial={{ height: 0 }}
          animate={{ height: menuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <ul className="px-4 py-4 space-y-4">
            {[
              { label: 'Home', href: '/home' },
              { label: 'About Us', href: '/about' },
              { label: 'Abstracts', href: '/abstracts' },
              { label: 'Publications', href: '/publications' },
              { label: 'Scientific Programs', href: '/scientific-programs' },
              { label: 'Registration & Sponsorship', href: '/registration-sponsorship' },
              { label: 'Discover Kanpur', href: '/general-info' },
              { label: 'IBS Team', href: '/ibs-team' },
              { label: 'Contacts', href: '/contacts' }
            ].map((link, index) => (
              <motion.li
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.1, color: '#FFD700', transition: { duration: 0.3 } }}
              >
                <a href={link.href} className="text-sm font-semibold text-white">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
