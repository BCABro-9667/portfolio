import React from "react";
import "../styles/about.css";
import mainImage from "../img/main.jpg";
import resumePDF from "../img/Avdhesh_Resume.pdf";

const About = () => {
  return (
    <div className="About" id="about-me">
      <div className="content1 Abouts">
        <h4 className="ex">Who I Am</h4>
        <div className="content-h2">
          <h2>Get to Know Me Better</h2>
        </div>
      </div>
      <div className="about">
        <div className="left main-img">
          <img src={mainImage} alt="Avdhesh Kumar" height="400" />
        </div>
        <div className="right">
          <h2>Hi There! I'm Avdhesh Kumar</h2>
          <h4>Web Developer</h4>
          <p>
            I'm Avdhesh Kumar, a passionate web and app developer currently
            pursuing my Bachelor's in Computer Applications. With expertise in
            React, Node.js, Express, Tailwind CSS, SCSS, Bootstrap, Material UI,
            MongoDB, and React Native, I specialize in building seamless,
            user-friendly digital experiences. From frontend to backend, I
            enjoy transforming ideas into functional, visually appealing
            applications.
          </p>
          <table>
            <tbody>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>+91 96673 46203</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>avdeshrajput925064@gmail.com</td>
              </tr>
              <tr>
                <td><strong>From:</strong></td>
                <td>Gurgaon - Haryana</td>
              </tr>
              <tr>
                <td><strong>Languages:</strong></td>
                <td>Hindi, English</td>
              </tr>
            </tbody>
          </table>
          <div className="hire-btn">
          <button className="hire">
            <a href="#">Hire Me</a>
          </button>
          <button className="resume">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;