import { useParams } from "react-router-dom";
import { projectsDB } from "../../data/projects.db";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const project = projectsDB.find(
    (item) => item.id === id
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="project-details">
      <img
        src={project.image}
        alt={project.title}
        className="details-image"
      />

      <div className="details-content">
        <h1>{project.title}</h1>
        <p className="industry">{project.industry}</p>

        <p className="summary">{project.summary}</p>

        <h4>Tools</h4>
        <p>{project.tools.join(", ")}</p>

        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank">
              GitHub
            </a>
          )}

          {project.links.report && (
            <a href={project.links.report} target="_blank">
              Report
            </a>
          )}

          {project.links.dashboard && (
            <a href={project.links.dashboard} target="_blank">
              View Dashboard
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
