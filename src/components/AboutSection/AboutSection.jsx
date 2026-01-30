import React from "react";
import "./AboutSection.css";
import profilePic from "../../assets/Profile.jpg";

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
            I bring together qualitative research, market analysis, data science,
            and software development to create meaningful, evidence-driven
            solutions. With over three years of experience in market research,
            user research, and academic research, I specialize in transforming
            both qualitative and quantitative data into actionable insights.
          </p>

          <p>
            My work spans data collection, management, and analysis; statistical
            modeling and machine learning; and the development of intelligent
            systems across diverse industries. This intersection of research
            rigor and technical execution allows me to uncover patterns,
            validate ideas, and build solutions that are not only data-informed
            but practically impactful.
          </p>

          {/* Skills Cards */}
          <div className="skills-cards">
            <div className="card clickable">
              <h3>Research & Data Analysis</h3>
              <p>Excel, SQL, Sheets, Python (Pandas), SPSS, JASP</p>
            </div>

            <div className="card clickable">
              <h3>Data Science & Machine Learning</h3>
              <p>Python, R</p>
            </div>

            <div className="card clickable">
              <h3>Software Development</h3>
              <p>React, JavaScript, Node.js, Python</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
