export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-kind">{project.kind}</span>
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
        {project.linkLabel} <span aria-hidden="true">↗</span>
      </a>
      {project.demo && <a className="project-link project-demo" href={project.demo} target="_blank" rel="noreferrer">Ver página web <span aria-hidden="true">↗</span></a>}
    </article>
  );
}
