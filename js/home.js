setTimeout(() => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const url = link.href;

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 400);
    });
  });
}, 0);


function getBaseUrl() {
  const hostname = window.location.hostname;
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

  // ruta base según entorno
  return isLocal ? "/" : "/javier_revelo/";
}

/**
 * Array de imágenes que rotan como fondo
 */
const homeImages = [
  `${getBaseUrl()}assets/images/inicio/home_1.jpg`,
  `${getBaseUrl()}assets/images/inicio/home_2.jpg`,
  `${getBaseUrl()}assets/images/inicio/home_5.jpg`,
  `${getBaseUrl()}assets/images/inicio/home.jpg`
];

let index = 0;



/* CONTENEDOR PRINCIPAL DEL HOME */
const section = document.querySelector(".home__section");

if (!section) {
  console.error("No se encontró .home__section");
}

/* CREACIÓN DINÁMICA DEL FONDO */
/* Crea un div que actuará como fondo dinámico */
const bg = document.createElement("div");

bg.classList.add("home__bg");

section.appendChild(bg);

/* establece imagen inicial del fondo */
bg.style.backgroundImage = `url(${homeImages[index]})`;

/* CAMBIO AUTOMÁTICO DE IMÁGENES */
setInterval(() => {
  bg.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % homeImages.length;
    bg.style.backgroundImage = `url(${homeImages[index]})`;
    bg.style.opacity = 1;
  }, 500);

}, 5000);