export const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Sobre mí", to: "/sobre-mi" },
  { label: "Habilidades", to: "/habilidades" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: "/contacto" },
];

export const skills = [
  { name: "Python", level: "Básico-intermedio", note: "En formación" },
  { name: "Java", level: "Básico-intermedio", note: "En formación" },
  { name: "HTML", level: "Básico", note: "Práctica en proyectos" },
  { name: "CSS", level: "Básico", note: "Práctica en proyectos" },
  { name: "JavaScript", level: "Básico", note: "Práctica en proyectos" },
  { name: "React", level: "Inicial", note: "Aprendiendo en el curso" },
];

export const projects = [
  {
    number: "01",
    title: "Calculadora y visualizadora de límites",
    description:
      "Aplicación de escritorio hecha en equipo para Cálculo Básico. Calcula límites laterales y al infinito, muestra resultados y grafica funciones.",
    technologies: ["Python", "SymPy", "CustomTkinter", "Matplotlib"],
    kind: "Proyecto grupal · Cálculo Básico",
    link: "https://github.com/jaraemily08-hub/EID-de-Limites",
    linkLabel: "Ver repositorio grupal",
  },
  {
    number: "02",
    title: "IVORA Nails",
    description:
      "Página web de una marca de uñas press-on, creada como primer proyecto del curso de Desarrollo de Frontend. Incluye catálogo, filtros y carrito interactivo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    kind: "Proyecto de curso · Frontend",
    link: "https://github.com/isidoraavs/portafolio/tree/main/proyectos/ivora-nails",
    linkLabel: "Ver archivos en GitHub",
    demo: "/proyectos/ivora-nails/index.html",
  },
];
