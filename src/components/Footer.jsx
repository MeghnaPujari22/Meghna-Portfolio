import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Meghna Pujari</h3>
            <p>Full Stack Developer</p>
            <p>Building digital solutions that make an impact</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <a href="mailto:meghapujari28@gmail.com" className="contact-link">
              <FaEnvelope /> meghapujari28@gmail.com
            </a>
            <a href="tel:+918010093187" className="contact-link">
              <FaPhone /> +91 8010093187
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a 
              href="https://linkedin.com/in/meghna-pujari-7b2b25202" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/MeghnaPujari22" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="copyright">
            &copy; {new Date().getFullYear()} Meghna Pujari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;