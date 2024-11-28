import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import col from "../assets/hbtucollege.png";
import lab from "../assets/biochemLab.png";
import conference from "../assets/aboutConference.png";

const About = () => {
  const sectionRefs = useRef([]);
  const isInView = useInView(sectionRefs.current, { once: false });

  useEffect(() => {
    // GSAP animations for each section when they come into view
    sectionRefs.current.forEach((section, index) => {
      if (isInView) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2, ease: "power3.out" }
        );
      }
    });
  }, [isInView]);

  return (
    <div>
      {/* About The University Section */}
      <motion.section
        ref={el => sectionRefs.current[0] = el}
        className="bg-gray-100"
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About The University 
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
            Harcourt Butler Technical University, Kanpur (Formerly HBTI, Kanpur) was established in 1921 and has a glorious history and has always been at the forefront of technological developments and the growth of industries in the country since its inception. The Institute began as the Government Technological Institute, Uttar Pradesh in 1921. The Institute was renamed Harcourt Butler Technological Institute in 1926 in honor of the name of Sir Spencer Harcourt Butler, the then Governor of U.P. Degree courses in Oil Technology were started in 1921, and Chemical Engineering was started in 1954 and after that number of undergraduate and post graduate courses were started. On March 26, 1965, it was upgraded from a Government Department status to an Autonomous Institution. It was upgraded to Harcourt Butler Technical University, Kanpur on September 01, 2016, by Govt. of UP. The University spreads across two campuses - East Campus (77 acres) and West Campus (271 acres) situated approximately 3 kilometers apart. The University provides a congenial environment for the holistic growth and all-round development of the students.
              </motion.p>
              <div className="mt-8">
                <a
                  href="https://hbtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <motion.img
                src={col}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About The Department Section */}
      <motion.section
        ref={el => sectionRefs.current[1] = el}
        className="bg-gray-100"
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ABOUT THE DEPARTMENT
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                  The Department of Biochemical Engineering at Harcourt Butler Technical University (formerly H.B.T.I.), Kanpur, became an independent entity in September 2016. Originally established in 1964 as part of the Biochemical Engineering and Food Technology department, it now offers a four-year B.Tech and two-year M.Tech in Chemical Technology with a specialization in Biochemical Engineering, alongside a Ph.D. program. The department boasts well-equipped laboratories to support modern industry and research needs, ensuring students are trained in the latest technologies in Biochemical Engineering, Biotechnology and B.Pharm. Faculty members play a key role in imparting skills that prepare students for careers in industries and research organizations. Over the years, the department has received financial backing from prominent organizations like CST, DBT, and the World Bank for various projects. Recently, it secured three CPCB Delhi projects. The department regularly hosts national and international seminars, workshops, and faculty development programs to enhance student creativity and productivity. Alumni hold prestigious positions in government and private sectors, contributing to national development. The department is committed to continuous improvement by updating faculty and students through modernized labs and periodic curriculum reviews.
              </motion.p>
              <div className="mt-8">
                <a
                  href="https://hbtu.ac.in/bio-chemical-engineering-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <motion.img
                src={lab}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About The Conference Section */}
      <motion.section
        ref={el => sectionRefs.current[2] = el}
        className="bg-gray-100"
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ABOUT THE CONFERENCE
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                 The Department of Biochemical Engineering, HBTU Kanpur, proudly presents "BIO-METACON 2025," a premier international conference centered around the theme "Sustainable Innovation and Challenges: Recent Trends in Bioengineering." Scheduled for 3rd-5th March 2025, this event aims to foster discussions and collaborations among leading academics, researchers, and industry experts in the field of Bioengineering.
BIO-METACON 2025 will provide a dynamic platform to explore the latest advancements and emerging challenges in bioengineering, focusing on sustainable innovation in biotechnology, biochemical processes, and bio-product development. 
Attendees will have the opportunity to participate in keynote sessions, technical presentations, panel discussions, and workshops led by distinguished speakers from both academia and industry. The conference encourages knowledge exchange, networking, and collaboration to address critical global challenges such as climate change, sustainable development, and health care.
Join us at HBTU Kanpur to engage with thought leaders, share groundbreaking research, and contribute to shaping the future of bioengineering.
              </motion.p>
              <div className="mt-8">
                <a
                  href="https://hbtu.ac.in/bio-chemical-engineering-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <motion.img
                src={conference}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
