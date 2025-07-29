import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBook, FaUniversity } from "react-icons/fa";
import "../styles/Education.css";

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Application (MCA)",
      institution: "VPIMSR College, Shivaji University",
      year: "2021 - 2023",
      icon: <FaGraduationCap />,
      courses: ["Advanced Algorithms", "Cloud Computing", "Machine Learning", "Web Technologies"]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science (BSC - ECS)",
      institution: "D.H.B. Soni College, Solapur University",
      year: "2018 - 2021",
      icon: <FaBook />,
      courses: ["Data Structures", "Database Systems", "Operating Systems", "Computer Networks"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My Academic Journey</p>
        </motion.div>

        <motion.div
          className="education-timeline"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              className="education-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <div className="institution">
                  <FaUniversity className="university-icon" />
                  <span>{edu.institution}</span>
                </div>
                <div className="year-badge">{edu.year}</div>
                
                <div className="courses-section">
                  <h4>Key Courses:</h4>
                  <div className="courses-grid">
                    {edu.courses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;