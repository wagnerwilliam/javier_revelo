import { Utils } from "./utils.js"
class Trabajos extends HTMLElement {
    constructor() {
        super()
        this.TIENDA = "tienda"
        this.utils = new Utils()
    }

    connectedCallback() {
        const viewType = this.getAttribute("view-type")
        this.render(viewType)
    }

    render(viewType) {
        const data = this.utils.getData(viewType);
        this.innerHTML = `
      <div class="trabajos__cards gallery">
        ${data.map((objImg) => `
          <div class="item" data-category="${objImg.category}">
              <div class="image-container">
                  <img src="${objImg.url}" alt="${objImg.name}">
                  <div class="overlay">
                      <h3>${objImg.name}</h3>
                        ${
                            viewType === this.TIENDA
                            ? `
                                <p class="price">
                                    <span class="old-price">${objImg.oldPrice} ${objImg.currency}</span>
                                    <span class="new-price">${objImg.price} ${objImg.currency} IVA incl</span>
                                </p>
                                <a href="detalle.html?id=${objImg.id}&type=${viewType}">Comprar</a>
                            `
                            : `
                                <a href="detalle.html?id=${objImg.id}&type=${viewType}">- Ver -</a>
                            `
                        }
                  </div>
              </div>  
            
          </div>
        `).join("")}
      </div>
    `
    }
}

customElements.define("my-works", Trabajos)
