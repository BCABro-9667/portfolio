import React, { useState } from "react";
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
  { name: "HTML", img: HTML, color: "#e34c26", description: "Semantic HTML5 markup for structured content" },
  { name: "CSS", img: CSS, color: "#264de4", description: "Styling with modern CSS3 features including Flexbox and Grid" },
  { name: "JavaScript", img: JS, color: "#f0db4f", description: "ES6+ features, asynchronous programming, DOM manipulation" },
  { name: "React.js", img: REACT, color: "#61dafb", description: "Component-based architecture, hooks, state management" },
  { name: "Node.js", img: NODE, color: "#68a063", description: "Server-side JavaScript runtime, building APIs" },
  { name: "Express.js", img: EXPRESS, color: "#000", description: "Minimalist web framework for Node.js" },
  { name: "Next.js", img: NEXT_JS, color: "#000", description: "React framework for server-side rendering and static sites" },
  { name: "Bootstrap", img: BOOTSTRAP, color: "#7952b3", description: "Responsive design with Bootstrap components" },
  { name: "Tailwind", img: TAILWIND, color: "#38b2ac", description: "Utility-first CSS framework for rapid UI development" },
  { name: "WordPress", img: WORDPRESS, color: "#21759b", description: "Theme development and customization" },
  { name: "Shopify", img: SHOPIFY, color: "#96bf48", description: "Liquid templating, theme customization, app development" },
  { name: "MongoDB", img: DB, color: "#4db33d", description: "NoSQL database with Mongoose ODM" },
  { name: "MySQL", img: MYSQL, color: "#00758f", description: "Relational database design and SQL queries" },
  { name: "GitHub", img: GITHUB, color: "#181717", description: "Version control, collaboration, and CI/CD" },
  { name: "Photoshop", img: PHOTOSHOP, color: "#31a8ff", description: "Image editing and graphic design" },
  { name: "Canva", img: CANVA, color: "#00c4cc", description: "Quick graphic design and social media assets" },
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools" },
    { id: "design", name: "Design" },
  ];

  const getSkillCategory = (skillName) => {
    const frontend = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind"];
    const backend = ["Node.js", "Express.js"];
    const database = ["MongoDB", "MySQL"];
    const design = ["Photoshop", "Canva", "WordPress", "Shopify"];
    const tools = ["GitHub"];

    if (frontend.includes(skillName)) return "frontend";
    if (backend.includes(skillName)) return "backend";
    if (database.includes(skillName)) return "database";
    if (design.includes(skillName)) return "design";
    if (tools.includes(skillName)) return "tools";
    return "other";
  };

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => getSkillCategory(skill.name) === activeCategory);

  return (
    <>
      <div className="content1" id="skills">
        <h4 className="ex">Skills</h4>
        <div className="content-h2">
          <h2>The Tools and Technologies I Use</h2>
        </div>
      </div>

      <div className="skill-container">
        {/* Category Filters */}
        <div className="skills-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div
                className={`skill-card ${selectedSkill?.name === skill.name ? 'active' : ''}`}
                key={index}
                style={{ "--color": skill.color }}
                onMouseEnter={() => setSelectedSkill(skill)}
                onClick={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
              >
                <img src={skill.img} alt={skill.name} height="50" />
                <div className="skill-name">{skill.name}</div>
                {selectedSkill?.name === skill.name && (
                  <div className="skill-tooltip" style={{ backgroundColor: skill.color }}>
                    {skill.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Skill Details */}
        {/* <div className="skill-details-panel">
          {selectedSkill ? (
            <>
              <h3 style={{ color: selectedSkill.color }}>{selectedSkill.name}</h3>
              <p>{selectedSkill.description}</p>
              <div className="skill-proficiency">
                <div 
                  className="proficiency-bar" 
                  style={{ 
                    width: `${Math.floor(Math.random() * 60) + 40}%`, // Random between 40-100%
                    backgroundColor: selectedSkill.color 
                  }}
                ></div>
              </div>
            </>
          ) : (
            <div className="skill-instruction">
              <p>← Hover or click on a skill to see details</p>
            </div>
          )}
        </div> */}

        {/* Content Section */}
        {/* <div className="content-section">
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
        </div> */}
      </div>
    </>
  );
};

export default SkillsSection;