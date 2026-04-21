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
      <section class="section home__section">
        <header class="header header__${theme}">
            <h1>Javier Revelo</h1>
            ${subTitle ? `<h2>${subTitle}</h2>` : ""}
            <nav class="header__nav" id="menuNav">
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
            <div class="hamburger_menu" id="menu"><i class="ri-menu-line"></i></div>
        </header>
      </section>
    `;
  }
}

customElements.define("my-header", Header);


const menu = document.getElementById("menu")
const menuNav = document.getElementById("menuNav")


menu ? menu.addEventListener("click", () => { 
  menuNav.classList.toggle("active")
}) : null;
