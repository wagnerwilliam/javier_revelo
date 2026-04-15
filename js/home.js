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

    return isLocal ? "/" : "/javier_revelo/";
}

const homeImages = [
  `${getBaseUrl()}assets/images/inicio/home_1.jpg`,
  `${getBaseUrl()}assets/images/inicio/home_2.jpg`,
  `${getBaseUrl()}assets/images/inicio/home_5.jpg`,
  `${getBaseUrl()}assets/images/inicio/home.jpg`
];

let index = 0;

const section = document.querySelector(".home__section");

if (!section) {
  console.error("No se encontró .home__section");
}

// crear fondo
const bg = document.createElement("div");
bg.classList.add("home__bg");

section.appendChild(bg);

// imagen inicial
bg.style.backgroundImage = `url(${homeImages[index]})`;

setInterval(() => {
  bg.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % homeImages.length;
    bg.style.backgroundImage = `url(${homeImages[index]})`;
    bg.style.opacity = 1;
  }, 500);

}, 5000);