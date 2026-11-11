import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="page-section contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">04 · CONTACTO</p>
        <h1>¿Conversamos?</h1>
        <p>Si quieres conocer más sobre mis proyectos o compartir una oportunidad, escríbeme.</p>
        <a className="contact-email" href="mailto:ivalverde2026@alu.uct.cl">ivalverde2026@alu.uct.cl</a>
        <a className="github-link" href="https://github.com/isidoraavs" target="_blank" rel="noreferrer">Mi perfil de GitHub ↗</a>
      </div>
      <ContactForm />
    </section>
  );
}
