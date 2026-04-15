/**
 * Componente Web personalizado que representa el encabezado del sitio
 */

class Header extends HTMLElement {

  constructor() {
    super()
    /**
     * Lista de elementos de navegación que se renderizan en el menú
     * @type {{ name: string, href: string }[]}
     */

    this.BASE_URL = this.getBaseUrl();

    this.navItems = [
    { name: "Inicio", href: `${this.BASE_URL}index.html` },
    { name: "Trabajos", href: `${this.BASE_URL}plantillas/trabajos.html` },
    { name: "Tienda", href: `${this.BASE_URL}plantillas/tienda.html` },
    { name: "Sobre Mi", href: `${this.BASE_URL}plantillas/sobre_mi.html` },
    { name: "Contacto", href: `${this.BASE_URL}plantillas/contacto.html` }
    ];
  }

  /**
   * Detecta el entorno y devuelve la base URL correcta
   */
  getBaseUrl() {
    const hostname = window.location.hostname;
    const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

    return isLocal ? "/" : "/javier_revelo/";
  }
  /**
   * Método del ciclo de vida que se ejecuta cuando el componente
   * se inserta en el DOM
   */
  connectedCallback() {
    const subTitle = this.getAttribute("sub-title");
    const theme = this.getAttribute("theme")
    this.render(subTitle, theme)
  }

  /**
   * Renderiza el contenido HTML del header
   * @param {string|null} subTitle - Texto opcional para el subtítulo
   * @returns {void}
   */
  render(subTitle, theme) {
    const currentPath = window.location.pathname;
    this.innerHTML = `
      <section class="section">
        <header class="header header__${theme}">
            <h1>Javier Revelo</h1>
            ${subTitle ? `<h2>${subTitle}</h2>` : ""}
            <nav class="header__menu">
                <ul>
                    ${this.navItems.map((item) => `
                        <li>
                          <a href="${item.href}" 
                          class="${currentPath === item.href ? 'active' : ''}"
                          >${item.name}</a>
                        </li>
                    `).join("")}
                </ul>
            </nav>
        </header>
      </section>
    `;
  }
}

customElements.define("my-header", Header);


// reubicar
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