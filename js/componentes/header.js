/**
 * Componente Web personalizado que representa el encabezado del sitio
 */

const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

const BASE_URL = isLocal ? "/" : "/javier_revelo/";
class Header extends HTMLElement {

  constructor() {
    super()
    /**
     * Lista de elementos de navegación que se renderizan en el menú
     * @type {{ name: string, href: string }[]}
     */
    this.navItems = [
    { name: "Inicio", href: `${BASE_URL}index.html` },
    { name: "Trabajos", href: `${BASE_URL}plantillas/trabajos.html` },
    { name: "Tienda", href: `${BASE_URL}plantillas/tienda.html` },
    { name: "Sobre Mi", href: `${BASE_URL}plantillas/sobre_mi.html` },
    { name: "Contacto", href: `${BASE_URL}plantillas/contacto.html` }
    ];
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
    `;
  }
}

customElements.define("my-header", Header);
