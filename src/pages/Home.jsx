import { Link } from "react-router-dom";
import profilePhoto from "../assets/isidora-valverde.jpeg";

export default function Home() {
  return (
    <section className="hero page-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> MINI PORTAFOLIO · 2026</p>
        <h1>Hola, soy<br /><span>Isidora Valverde.</span></h1>
        <p className="hero-role">Desarrolladora frontend en formación</p>
        <p className="hero-intro">
          Estudio Ingeniería Civil en Informática. Me interesa crear experiencias web claras y seguir aprendiendo sobre inteligencia artificial.
        </p>
        <Link className="button button-primary" to="/proyectos">Explorar mis proyectos <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-visual">
        <img src={profilePhoto} alt="Isidora Valverde" width="1200" height="1600" />
        <span className="visual-label">APRENDER · CREAR · MEJORAR</span>
        <span className="visual-index">IV / 2026</span>
      </div>
      <div className="hero-bottom-note"><span>01</span> Ingeniería · Frontend · IA</div>
    </section>
  );
}
