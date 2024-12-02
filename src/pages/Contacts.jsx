import React from 'react';
import { motion } from 'framer-motion';
import bg from "../assets/bg.png";
const Contacts = () => {
  return (
    <div className="container mx-auto py-10 relative perspective-1000"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover", // Ensures the image scales proportionally to cover the area
      backgroundRepeat: "no-repeat", // Prevents tiling of the image
      backgroundPosition: "center center", // Centers the image both horizontally and vertically
      backgroundAttachment: "fixed", // Keeps the image fixed during scroll (optional)
      minHeight: "100vh", // Ensures the background covers the full viewport height
      display: "flex", // Optional: Enables flexbox for better layout control
      flexDirection: "column", // Optional: Arranges children vertically
      alignItems: "center", // Optional: Centers children horizontally
      justifyContent: "center", // Optional: Centers children vertically
    }}>
      {/* Contact Section */}
      <section className="dark:bg-slate-800 p-8 rounded-lg " id="contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white"
              whileHover={{ rotateY: 10, scale: 1.1 }}
            >
              Contact Us
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              We'd love to hear from you!
            </p>
          </div>

          {/* Form with 3D Hover Effects */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-8">
              {/* Address Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-gradient-to-br from-cyan-500 to-cyan-500 p-6 rounded-lg shadow-lg text-white"
              >
                <h3 className="text-lg font-medium mb-2">Our Address</h3>
                <p> Harcourt Butler Technical University (HBTU) Kanpur 208002, India</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-gradient-to-br from-cyan-500 to-cyan-500 p-6 rounded-lg shadow-lg text-white"
              >
                <h3 className="text-lg font-medium mb-2">Our Email</h3>
                <p> biometacon@hbtu.ac.in</p>
              </motion.div>
              {/* Contact Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                className="bg-gradient-to-br from-cyan-500 to-cyan-500 p-6 rounded-lg shadow-lg text-white"
              >
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <p>Mobile: +91 9450941787 , +91 7577082588</p>
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              whileHover={{ rotateY: 0, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform-gpu"
            >
              <div className="space-y-6">
                <input
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none"
                />
                <input
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotateX: 10 }}
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg shadow-xl"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;
