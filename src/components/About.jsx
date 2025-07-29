import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
       <h2 className="section-title" style={{ color: '#3498db' }}>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Software Developer</h3>
            <p>
              Hi, I'm Meghna Revansiddha Pujari, a passionate software developer with expertise in building web applications and backend systems.
            </p>
            <p>
              With a Master's in Computer Applications and professional experience at NewSoft Solutions, I specialize in creating efficient, scalable solutions using modern technologies.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <p>Meghna Revansiddha Pujari</p>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <p>meghapujari28@gmail.com</p>
              </div>
              <div className="detail-item">
                <span>From:</span>
                <p>Solapur, Maharashtra, India</p>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-container">
              <span className="skill">JavaScript</span>
              <span className="skill">React</span>
              <span className="skill">PHP</span>
              <span className="skill">MySQL</span>
              <span className="skill">Python</span>
              <span className="skill">Java</span>
              <span className="skill">HTML/CSS</span>
              <span className="skill">Bootstrap</span>
              <span className="skill">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;