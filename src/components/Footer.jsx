import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" to="/" aria-label="Volver al inicio">IV.</Link>
      <p>Isidora Valverde · Estudiante de Ingeniería Civil en Informática</p>
      <small>© {new Date().getFullYear()} Isidora Valverde</small>
    </footer>
  );
}
