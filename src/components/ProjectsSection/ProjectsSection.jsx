import React, { useState } from "react";
import { projectsDB } from "../../data";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Research",
    "Data Analysis",
    "Models",
    "Dashboard",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsDB
      : projectsDB.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>

              <div className="tools">
                {project.tools.map((tool) => (
                  <span className="tool-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>

              <button className="view-btn">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
