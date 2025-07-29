import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Meghna Pujari</h1>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;