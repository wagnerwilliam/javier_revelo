import { Utils } from "./utils.js";


/**
 * @class HeroSection
 * @extends HTMLElement
 * @description Componente Web que renderiza la sección hero según la plantilla actual
 */

class HeroSection extends HTMLElement {
    constructor(){
        super()
        this.utils = new Utils()
    }

    /**
     * Obtiene el nombre de la plantilla actual desde la URL
     * @returns {string} Nombre de la plantilla (ej: "detalle", "tienda")
     */
    getTemplate(){
        return window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "")
    }

    /**
     * Obtiene los parámetros de la URL
     * @returns {{ type: string | null, id: string | null }}
     */
    getParams(){
        const params = new URLSearchParams(window.location.search)
        return {
            type: params.get("type"),
            id: params.get("id"),
        }
    }

    /**
     * Renderiza un título basado en el atributo HTML "title"
     * @returns {void}
     */
    renderTitle() {
        const title = this.getAttribute("title");
        this.render(title);
    }

    /**
     * Renderiza el detalle de un elemento basado en parámetros
     * @param {{ type: string | null, id: string | null }} params
     * @returns {void}
     */
    renderDetalle({ type, id }) {
        const data = this.utils.getData(type);
        const item = data.find(obj => obj.id == id);

        this.render(item?.name || "No encontrado");
    }

    /**
     * Renderiza el HTML del hero
     * @param {string | null} html - contenido a mostrar en el título
     * @returns {void}
     */
    render(html) {
        this.innerHTML = `
            <section class="section hero">
                <h2>${html}</h2>
            </section>
        `;
    }

    /**
     * Método del ciclo de vida que se ejecuta al insertar el componente en el DOM
     * @returns {void}
     */
    connectedCallback() {
        const plantilla = this.getTemplate();
        const params = this.getParams();

        const handlers = {
            trabajos: () => this.renderTitle(),
            tienda: () => this.renderTitle(),
            detalle: () => this.renderDetalle(params),
            contacto: () => this.renderTitle(),
            sobre_mi: () => this.renderTitle(),
        };

        handlers[plantilla]?.();
    }

}

customElements.define("my-hero", HeroSection)
