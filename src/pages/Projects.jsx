import { projects } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">03 · PROYECTOS</p>
      <h1>Aprender haciendo<span className="accent-period">.</span></h1>
      <p className="section-intro">Dos proyectos de mi recorrido académico, con tecnologías y objetivos distintos.</p>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}
