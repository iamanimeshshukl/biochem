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
      <div className="w-full px-4 pt-16 pb-16" id="faq">
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Initiatives of The Government of India
        </motion.h2>
        <motion.p
          className="pt-6 pb-8 text-base max-w-2xl text-center m-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.p>
        <motion.div
          className="mx-auto w-full max-w-4xl justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            { src: 'data:image/png;base64,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', alt: 'Apple' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Azadi-Ka-Amrit-Mahotsav-Logo.png', alt: 'Pixar' },
            { src: 'data:image/jpeg;base64,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', alt: 'Geforce' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooLQktRS2ljEp4tsof_eDvTwpyqOScQjRxg&s', alt: 'Ethereum' },
            { src: 'data:image/png;base64,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', alt: 'Line' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEg8SEBMTFhUXEBEVEBEVEBgXFRYWFhUWGBgVFhYYHighGBolGxgWITMiJysrLi8uFyAzODMvOCgtLisBCgoKDg0OGxAQGzIlICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQEDBAYHAv/EAEsQAAEDAgMEBAsEBQkJAQAAAAEAAgMEEQUSIQYTMUEiYZLRBxQWMlFTYnGBkZMVUlTSFyZzoeEjNkKUsbPB0/A1Q0RjZHKCg7Q0/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QALhEBAAICAQEHAwQDAAMAAAAAAAECAxESBBMVITFBUWEUIlIFIyTwMzRCRHGR/9oADAMBAAIRAxEAPwDuKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKEpIwX4o3K57QSGgOdoQchBs8A8R/FV9pHo64rLsWLd4XtAylrR0j0nuDTlBItxNuPK647X3TwX4MSY4tGou1p6rlubLf021XcZIlE1mGcrHIgICAgICAgICAgIKIOT7R7S4k7EJqWkedH5Yo2tZrZgcSXP58TxXo4sOLsovdjvkvz41V/WP0SfOm70/if3aP3nnBdosTjr6emrHnpPaHxubGei/gQWc/ioyYsM4ptQpkvF+NnWQvPbVUBBynavaTEftCSko5LWLGxxtay7iYw83c/nqeY4L0MGHF2XO7FkyX58avP6x+iT503en8X+7T+8frH6JPnTd6fxP7tH7zN8H20dZLWTU1W/NljkzAtaC18bg0i7RrxIXHU4c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', alt: 'Slack' },
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
