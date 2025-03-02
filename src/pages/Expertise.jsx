import React from "react";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise" id="services">
      <div className="content1">
        <h4 className="ex">My Expertise</h4>
        <div className="content-h2">
          <h2>Provide Wide Range of Digital Services</h2>
        </div>
      </div>

      <div className="boxs">
        <div className="box">
          <h4>Web Design</h4>
          <p>
            I specialize in creating responsive, intuitive, and aesthetically
            pleasing designs tailored to meet your business goal.
          </p>
          <button className="read-more">
            <a href="#">Read More</a>
          </button>
        </div>

        <div className="box">
          <h4>Web Development</h4>
          <p>
            I specialize in developing responsive and interactive web
            applications using modern technologies like HTML, CSS, JavaScript,
            and Node.js.
          </p>
          <button className="read-more">
            <a href="#">Read More</a>
          </button>
        </div>

        <div className="box">
          <h4>Debugging</h4>
          <p>
            Identifying and resolving errors to ensure seamless website
            functionality. I specialize in diagnosing issues in code,
            optimizing performance, and enhancing user experience.
          </p>
          <button className="read-more">
            <a href="#">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
