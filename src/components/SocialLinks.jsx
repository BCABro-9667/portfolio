import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaInstagram, FaChess } from "react-icons/fa";
import '../styles/SocialMedia.css'

const SocialLinks = () => {
  return (
    <div className="social-media">
      <h3>Follow Us:</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/avdhesh-bca-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/BCABro-9667" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.chess.com/member/prankmaster5" target="_blank" rel="noopener noreferrer">
          <FaChess className="icon chess" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
