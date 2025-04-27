// import React, { useState, useEffect } from 'react';
// import '../styles/ProjectsList.css'; // We'll create this CSS file next

// const ProjectsList = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/projects');
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const data = await response.json();
//         setProjects(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading projects...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="projects-container">
//       <header className="projects-header">
//         <h1>Projects</h1>
//         <p>
//           I've worked on tons of little projects over the years but these are the ones that I'm most proud of. 
//           Many of them are open-source, so if you see something that piques your interest, check out the code 
//           and contribute if you have ideas on how it can be improved.
//         </p>
//       </header>

//       <div className="projects-divider"></div>

//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project._id} className="project-cardd">
//             {project.imagePath && (
//               <div className="project-image">
//                 {project.imagePath && (
//                   <img
//                     src={`http://localhost:5000${project.imagePath}`}
//                     alt={project.title}
//                     className="project-image"
//                   />
//                 )}
//               </div>
//             )}
//             <div className="project-content">
//               <h3>{project.title}</h3>
//             {project.technologies.map((tech, index) => (
//               <span key={index} className="tech-tag">{tech}</span>
//             ))}
//               {/* <p className="subtitle">{project.subtitle}</p> */}
//               {/* <div className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} /> */}
//               {/* {project.technologies && project.technologies.length > 0 && (
//                 <div className="technologies">
//                 </div>
//               )} */}
//               {/* <a href={project.projectLink} className="project-link" target="_blank" rel="noopener noreferrer">
//                 View Project
//               </a> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsList;