import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import col from "../assets/hbtucollege.png";
import lab from "../assets/biochemLab.png";
import conference from "../assets/bio.jpg";

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
    <div
    
    >
      {/* About The University Section */}
      <motion.section
        ref={el => sectionRefs.current[0] = el}
        className=""
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
                className="mt-4 text-gray-600 text-lg text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                
              >
           Harcourt Butler Technical University (HBTU), Kanpur, formerly known as HBTI, was established in 1921 and has a rich history of contributing to technological advancements and industrial growth in India. Initially named the Government Technological Institute, it was renamed in 1926 in honor of Sir Spencer Harcourt Butler, then Governor of Uttar Pradesh. The university began offering degree courses in Oil Technology in 1921, followed by Chemical Engineering in 1954, and currently HBTU comprises four schools offering 13 B.Tech., 11 M.Tech., MCA, MBA, M.Sc. in Physics, Chemistry, and Mathematics, and Ph.D. programs. On March 26, 1965, it became an autonomous institution, and on September 1, 2016, it was upgraded to a university by the Government of Uttar Pradesh. The university spans two campuses—East Campus (77 acres) and West Campus (271 acres)—located about 3 kilometers apart. HBTU provides a supportive environment for the overall development of its students.
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
        className=""
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg" >
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ABOUT THE DEPARTMENT
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600 text-lg text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                 The Department of Biochemical Engineering at Harcourt Butler Technical University (formerly H.B.T.I.), Kanpur, became an independent department in September 2016. It was originally part of the Biochemical Engineering and Food Technology department, established in 1964. The department offers a four-year B.Tech and a two-year M.Tech in Chemical Technology with a specialization in Biochemical Engineering, along with Ph.D. program. Equipped with state-of-the-art laboratories, it ensures students are trained with the latest technological development related to Biochemical Engineering. The department is also mentoring two new program as B.Tech in Biotechnology, and Bachelor in Pharmacy. Faculty members focus on skill development to prepare students for careers in industry and research. The department has received financial support from prestigious organizations like CST, DBT, the World Bank, and CPCB Delhi for various projects. It frequently hosts national and international seminars, workshops, and faculty development programs. Alumni of the department hold key positions in government and private sectors, contributing to national progress. The department is committed to continuous growth through modernized labs and curriculum updates.
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
        className=""
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
                className="mt-4 text-gray-600 text-lg text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                 The Department of Biochemical Engineering at Harcourt Butler Technical University (HBTU), Kanpur, is proud to present "BIO-METACON 2025," an International Conference themed "Advances in Biorefinery: Opportunity and Challenges", scheduled for 29th-31st March 2025. The event aims to foster cutting-edge discussions and innovations in biorefinery technologies, a crucial field at the intersection of sustainability and industrial advancement.
              </motion.p>
              <div className="mt-8">
               
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
