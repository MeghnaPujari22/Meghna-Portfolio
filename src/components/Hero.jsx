import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Software Developer</h2>
        <p>Building scalable, secure, and user-friendly solutions.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;