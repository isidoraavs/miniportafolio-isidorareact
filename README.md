# Mini portafolio de Isidora Valverde

Portafolio académico con React, Vite y React Router. Presenta mi perfil como estudiante de Ingeniería Civil en Informática, mi interés por la inteligencia artificial, mis habilidades, dos proyectos y un formulario de contacto. Se preparó como un proyecto nuevo, usando mi portafolio anterior como apoyo.

## Instalación y ejecución

Se necesita npm y una versión compatible de Node.js: Node 20 desde 20.19.0, o Node 22.12.0 en adelante. Se recomienda Node 22.12.0 o superior.

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrir la dirección que muestra Vite en la terminal. Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Nombre, rol e invitación a explorar. |
| `/sobre-mi` | Estudios e intereses. |
| `/habilidades` | Lenguajes y herramientas con nivel aproximado. |
| `/proyectos` | Calculadora de límites e IVORA Nails. |
| `/contacto` | Correo, GitHub y formulario. |

Una dirección inexistente muestra una página 404. El encabezado y el pie se comparten entre las páginas.

## Estructura principal

```text
src/
  assets/       Fotografía usada por React
  components/   Header, Footer, Layout, ProjectCard y ContactForm
  pages/        Home, About, Skills, Projects y Contact
  App.jsx       Rutas y página 404
  data.js       Datos de navegación, habilidades y proyectos
  main.jsx      Inicio de React y BrowserRouter
  styles.css    Estilos y adaptación a móvil
public/
  proyectos/
    ivora-nails/ Demo de la primera página web
index.html      Documento que carga la aplicación
```

La calculadora es un proyecto grupal de Cálculo Básico con Python, SymPy, CustomTkinter y Matplotlib. Su tarjeta enlaza al repositorio del equipo. IVORA Nails usa HTML, CSS y JavaScript; se incluyen enlaces a su código y a una demo local.

## Formulario

`ContactForm` guarda nombre, correo, mensaje, errores y confirmación con `useState`. Valida los campos obligatorios y el formato del correo. El envío es una simulación académica: muestra una confirmación y no envía ni almacena mensajes. Para contactar realmente, usar el enlace de correo de la página.

## Dificultades y soluciones

- Al revisar el proyecto anterior, la fotografía estaba fuera de los archivos incluidos por Vite al compilar. En este proyecto se pasó a `src/assets/` y se importó desde React.
- El formulario necesitaba una confirmación clara. Se mantuvieron los controles con estado, se indicaron los campos obligatorios y se aclaró que el envío es una simulación.

Estos ajustes se realizaron con ayuda de IA. La parte que me cuesta explicar son las rutas y los componentes con props.

## Apoyo para estudiar el código

- `BrowserRouter` permite usar las direcciones del navegador. `Routes` contiene las opciones y cada `Route` relaciona una dirección con una página.
- `Layout` reúne el encabezado y el pie. `Outlet` muestra dentro de él la página de la ruta actual.
- Las props son datos que un componente recibe de otro. En `Projects`, cada `ProjectCard` recibe un objeto `project` con los datos de una tarjeta.

Esta guía sirve para revisar el código y practicar explicarlo con mis palabras. La ayuda recibida está declarada en `uso_ia.md`.
