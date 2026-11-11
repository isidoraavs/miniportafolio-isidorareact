import { NavLink } from "react-router-dom";
import { navigation } from "../data.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="wordmark" to="/" aria-label="Isidora Valverde, inicio">
          IV<span>.</span>
        </NavLink>
        <nav className="main-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-cta" href="https://github.com/isidoraavs" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
