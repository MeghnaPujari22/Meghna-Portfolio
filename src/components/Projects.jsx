import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BISI Management System",
      desc: "A comprehensive business correspondence platform that automates payment collection, commission calculation, and outstanding balance tracking for financial intermediaries. Implemented role-based access for Admin, Partners, and Collection Agents with real-time notifications.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
      features: [
        "Payment tracking system",
        "Automated commission calculations",
        "Real-time data updates",
        "Multi-role dashboard"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Easy Property Deal",
      desc: "A full-stack real estate marketplace featuring property listings with geolocation via Google Maps API. Enabled property transactions (Buy/Sell/Rent) with secure access controls for agents and telecallers.",
      tech: ["PHP", "MySQL", "Google Maps API", "JavaScript", "jQuery"],
      features: [
        "Interactive property maps",
        "Role-based access control",
        "Property search filters",
        "Transaction management"
      ],
      github: "#",
      demo: "#"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              
              <div className="project-body">
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;