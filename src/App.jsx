import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function NotFound() {
  return (
    <section className="page-section narrow-section">
      <p className="eyebrow">ERROR 404</p>
      <h1>Esta página no existe.</h1>
      <Link className="button button-primary" to="/">Volver al inicio</Link>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-mi" element={<About />} />
        <Route path="habilidades" element={<Skills />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
