// Verificar el uso de web components
class Header extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Título por defecto";

    this.innerHTML = `
      <header>
        <h1>${title}</h1>
      </header>
    `;
  }
}

customElements.define("my-header", Header);

// veriricar crear el detail component