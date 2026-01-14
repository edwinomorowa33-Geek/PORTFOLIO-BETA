import React from "react";
import "./AboutSection.css";
import profilePic from "../../assets/Profile.jpg"; // 

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src={profilePic} alt="Omorowa Edwin" />
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I combine research, data analysis, data science, and software development to create
            impactful solutions. My skills intersect to allow me to extract insights from data,
            design intelligent models, and implement software that brings ideas to life.
          </p>

          {/* Skills Cards */}
          <div className="skills-cards">
            <div
              className="card"
              onClick={() => alert("Research & Data Analysis clicked")}
            >
              <h3>Research & Data Analysis</h3>
              <p>Tools: Excel, Python (Pandas), SPSS, JASP</p>
            </div>

            <div
              className="card"
              onClick={() => alert("Data Science & ML clicked")}
            >
              <h3>Data Science & Machine Learning</h3>
              <p>Tools: Python (Scikit-learn), TensorFlow, NumPy, Matplotlib</p>
            </div>

            <div
              className="card"
              onClick={() => alert("Software Development clicked")}
            >
              <h3>Software Development</h3>
              <p>Tools: React, JavaScript, Node.js, Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
