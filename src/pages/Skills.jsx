import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="page-section">
      <p className="eyebrow">02 · HABILIDADES</p>
      <h1>Herramientas que estoy<br /><span>aprendiendo a dominar.</span></h1>
      <p className="section-intro">Niveles aproximados según mi experiencia actual y proyectos académicos.</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-card-heading"><span>{skill.name}</span><span className="skill-dot" aria-hidden="true">●</span></div>
            <p>{skill.level}</p>
            <small>{skill.note}</small>
          </article>
        ))}
      </div>
      <p className="skills-note">Los niveles son una referencia personal y pueden cambiar a medida que practico.</p>
    </section>
  );
}
