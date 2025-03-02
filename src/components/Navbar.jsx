import React, { useState } from "react";
import "../styles/navbar.css"; // Ensure you have a CSS file for styling
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <motion.nav className="navbarr" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">BCABro</a>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <motion.ul 
          className={isMobile ? "navbar-menu active" : "navbar-menu"} 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#" className="navbar-links">Home</a></motion.li>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#about-me" className="navbar-links">About</a></motion.li>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#services" className="navbar-links">Services</a></motion.li>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#skills" className="navbar-links">Skills</a></motion.li>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#projects" className="navbar-links">Projects</a></motion.li>
          <motion.li className="navbar-item" whileHover={{ scale: 1.1 }}><a href="#contact" className="navbar-links">Contact</a></motion.li>
        </motion.ul>
        <motion.button 
          className="hire-me-top open-form-button" 
          whileHover={{ scale: 1.1, backgroundColor: "#e67e22" }} 
          whileTap={{ scale: 0.9 }}>
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
