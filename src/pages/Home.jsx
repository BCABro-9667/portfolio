import React from "react";
import { motion } from "framer-motion";
import men from '../img/main.webp';
import "../styles/home.css";
import SocialLinks from '../components/SocialLinks'
import Expertise from '../pages/Expertise'
import About from '../pages/About'
import Skills from '../components/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const Home = () => {
  return (
  <>
  
  <div className="home-container">
      <motion.div 
        className="left" 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}>
        <h4>Hello! I Am</h4>
        <h2>Avdhesh Kumar</h2>
        <p>
          I'm A Web Developer having 1/2 years of experience in expertise of creating
          websites with full responsiveness, including backend integration.
        </p>
        <h3 className="turning"><i>"Turning Ideas into Digital Experiences"</i></h3>
        <hr className="devider" />    
        <SocialLinks/>
              <motion.button 
          className="hire-me-top open-form-button" 
          whileHover={{ scale: 1.1, backgroundColor: "#e67e22" }} 
          whileTap={{ scale: 0.9 }}>
          Hire Me
        </motion.button>
      </motion.div>
      <motion.div 
        className="right-home" 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}>
        <img src={men} alt="BCABro" height="450px" />
      </motion.div>
    </div>
      <About/>
      <Expertise/>
      <Skills/>
      <Projects/>
      <Contact/>

    </>
  );
};

export default Home;
