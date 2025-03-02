import React from "react";
import "../styles/skills.css";
import "../styles/Expertise.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import HTML from "../img/skills/html.png";
import CSS from "../img/skills/css.png";
import JS from "../img/skills/js.webp";
import REACT from "../img/skills/react.png";
import NODE from "../img/skills/nodejs.png";
import EXPRESS from "../img/skills/ex.png";
import NEXT_JS from "../img/skills/nextjs.png";
import BOOTSTRAP from "../img/skills/bootstrap.png";
import TAILWIND from "../img/skills/tailwind.png";
import WORDPRESS from "../img/skills/wordpress.png";
import SHOPIFY from "../img/skills/shopify.png";
import DB from "../img/skills/db.png";
import MYSQL from "../img/skills/mysql.png";
import GITHUB from "../img/skills/github.png";
import PHOTOSHOP from "../img/skills/photoshop.png";
import CANVA from "../img/skills/canva.png";

const skills = [
  { name: "HTML", img: HTML, color: "#e34c26" },
  { name: "CSS", img: CSS, color: "#264de4" },
  { name: "JavaScript", img: JS, color: "#f0db4f" },
  { name: "React.js", img: REACT, color: "#61dafb" },
  { name: "Node.js", img: NODE, color: "#68a063" },
  { name: "Express.js", img: EXPRESS, color: "#000" },
  { name: "Next.js", img: NEXT_JS, color: "#000" },
  { name: "Bootstrap", img: BOOTSTRAP, color: "#7952b3" },
  { name: "Tailwind", img: TAILWIND, color: "#38b2ac" },
  { name: "WordPress", img: WORDPRESS, color: "#21759b" },
  { name: "Shopify", img: SHOPIFY, color: "#96bf48" },
  { name: "MongoDB", img: DB, color: "#4db33d" },
  { name: "MySQL", img: MYSQL, color: "#00758f" },
  { name: "GitHub", img: GITHUB, color: "#181717" },
  { name: "Photoshop", img: PHOTOSHOP, color: "#31a8ff" },
  { name: "Canva", img: CANVA, color: "#00c4cc" },
];

const SkillsSection = () => {
  return (
    <>
    <div className="content1" id="skills">
        <h4 className="ex">Skills</h4>
        <div className="content-h2">
          <h2>The Tools and Technologies I Use
          </h2>
        </div>
      </div>

      {/* <h2>Skills in the Field of Web Development</h2> */}
      <div className="skill-container">

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                style={{ "--color": skill.color }}
              >
                <img src={skill.img} alt={skill.name} height="50" />
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}

            {/* Git Icon from FontAwesome
          <div className="skill-card" style={{ "--color": "#f05032" }}>
            <FontAwesomeIcon icon={faGitAlt} size="3x" color="white" />
            <div className="skill-name">Git</div>
          </div> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <ul className="skills-list">
            <li>
              <strong>Frontend:</strong> Expertise in HTML, CSS, JavaScript, and
              frameworks like React.js, Next.js, Bootstrap, and Tailwind CSS.
            </li>
            <li>
              <strong>Backend:</strong> Proficient in Node.js and Express.js for
              building fast and secure server-side applications.
            </li>
            <li>
              <strong>Database:</strong> Experience with MongoDB and MySQL to
              manage and optimize data storage.
            </li>
            <li>
              <strong>CMS & E-commerce:</strong> Skilled in WordPress and
              Shopify for building and customizing websites.
            </li>
            <li>
              <strong>Version Control:</strong> Comfortable using GitHub and Git
              for collaboration and code management.
            </li>
            <li>
              <strong>Design:</strong> Proficient with Photoshop and Canva to
              create visually appealing designs.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
