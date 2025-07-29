import React from "react";
import { FaCode, FaServer, FaUsers, FaChartLine } from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "NewSoft Solutions Pvt. Ltd.",
      duration: "Dec 2023 - Present",
      location: "Solapur, Maharashtra, India",
      achievements: [
        {
          icon: <FaServer />,
          title: "Backend Development",
          description: "Developed and maintained RESTful APIs and backend systems using PHP and MySQL, improving server response time by 15%"
        },
        {
          icon: <FaCode />,
          title: "Frontend Integration",
          description: "Designed responsive interfaces with Bootstrap that improved user engagement by 20%"
        },
        {
          icon: <FaUsers />,
          title: "Team Collaboration",
          description: "Worked in Agile teams to deliver 3 major product features ahead of schedule"
        },
        {
          icon: <FaChartLine />,
          title: "Performance Optimization",
          description: "Reduced page load times by 30% through code optimization and caching strategies"
        }
      ]
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Integrate InfoSolutions Pvt. Ltd.",
      duration: "Sep 2022 - Oct 2022",
      location: "Sangli, Maharashtra, India",
      achievements: [
        {
          icon: <FaCode />,
          title: "E-commerce Platform",
          description: "Developed key features for a responsive e-commerce platform using React.js"
        },
        {
          icon: <FaUsers />,
          title: "User Experience",
          description: "Improved user engagement by 25% through UI/UX enhancements"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#3498db' }}>Professional Journey</h2>
          <p className="section-subtitle">Where I've worked and what I've accomplished</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <h3 className="role">{exp.role}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="divider">•</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                <p className="location">{exp.location}</p>
              </div>
              
              <div className="achievements-grid">
                {exp.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;