import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css"; 

import CHECKMATE from '../img/chess.co.jpg';
import AVS from '../img/avs.png';
import ET from '../img/et.png';
import DOB from '../img/Janam.jpg';
import TEXT from '../img/portfolio6_lg.png';
import BLOG from '../img/blog.png';
import URL from '../img/url.jpg';
import NEWS from '../img/portfolio3_lg.png';
import FORM from '../img/Form.jpg';
import MDU from '../img/mdu.jpg';
import L_STOAAGE from '../img/lion.jpg';
import Admin from '../img/Admin.jpg';

const projects = [
  { id: 1, name: "CheckmateClub", category: "funny", img: CHECKMATE, tags: ["React.js", "Node.js", "MongoDB", "API"], link: "https://checkmateclub.netlify.app/" },
  { id: 2, name: "AVStorage", category: "portfolio", img: AVS, tags: ["React.js", "Node.js", "MongoDB", "API"], link: "https://avstoragecloudd.netlify.app/" },
  { id: 3, name: "E-commerce Website", category: "ecommerce", img: ET, tags: ["Wordpress"], link: "https://smtems.com/" },
  { id: 4, name: "DOB Calculation", category: "ecommerce", img: DOB, tags: ["HTML", "CSS", "JavaScript"], link: "https://janam-kundli-know.netlify.app/" },
  { id: 5, name: "Text Formatter", category: "ecommerce", img: TEXT, tags: ["React.js"], link: "#" },
  { id: 6, name: "Blog Website", category: "ecommerce", img: BLOG, tags: ["HTML", "CSS", "JavaScript"], link: "#" },
  { id: 7, name: "iURLManager", category: "ecommerce", img: URL, tags: ["React.js", "Node.js", "MongoDB", "API"], link: "#" },
  { id: 8, name: "News Website", category: "ecommerce", img: NEWS, tags: ["HTML", "CSS", "JS", "API"], link: "#" },
  { id: 9, name: "Chess Tournament Reg. From", category: "ecommerce", img: FORM, tags: ["React.js", "App_Script"], link: "https://chess-tournament-registration-form.netlify.app/" },
  { id: 10, name: "MDU Result", category: "ecommerce", img: MDU, tags: ["HTML", "CSS", "JS"], link: "result-mdurtkin.netlify.app" },
  { id: 11, name: "Browser Local Storage", category: "ecommerce", img: L_STOAAGE, tags: ["HTML", "CSS", "JS"], link: "https://prank-master.netlify.app/" },
  { id: 12, name: "Admin_Manager Login", category: "ecommerce", img: Admin, tags: ["React.js", "Node.js", "MongoDB", "API"], link: "https://admin-man.netlify.app/" },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="projects-section" id="projects">
      <div className="content1">
        <h4 className="ex">My Latest Projects</h4>
        <div className="content-h2">
          <h2>Explore the Projects I've Worked On</h2>
        </div>
      </div>

      <motion.div layout className="projects-grid">
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="project-card"
          >
            <img src={project.img} alt={project.name} className="project-img" />
            <h3 className="projects-card-head">{project.name}</h3>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>

      {visibleProjects < projects.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>Load More...</button>
      )}
    </div>
  );
};

export default ProjectsSection;
