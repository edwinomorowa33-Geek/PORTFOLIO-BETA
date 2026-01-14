import React from "react";
import "./HeroSection.css";

function HeroSection() {

  const handleDownloadCV = () => {
    const cvUrl = "/cv/Omorowa_Edwin_CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Omorowa_Edwin_CV.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      <h1>Omorowa Edwin</h1>

      <p className="roles">
        Researcher • Data Science • Data Analysis • Software
      </p>

      <p className="mission">
        Combining insight, data science, code, and research to create and
        demonstrate sustainable solutions, riding out my passion.
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <button onClick={handleDownloadCV}>
          Download CV
        </button>

        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
