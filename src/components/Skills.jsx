import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "PHP", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "HTML/CSS", level: 95 },
    { name: "Bootstrap", level: 85 },
    { name: "jQuery", level: 80 },
    { name: "Git", level: 75 },
  ];

  const professionalSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Agile Development", icon: "🔄" },
    { name: "Debugging", icon: "🐞" },
    { name: "API Integration", icon: "🔌" },
    { name: "Responsive Design", icon: "📱" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" style={{ color: '#3498db' }}>My Skills</h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="soft-skills-grid">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="soft-skill">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;