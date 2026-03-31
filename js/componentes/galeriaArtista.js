class Trabajos extends HTMLElement {

    constructor() {
        super()
        this.BASE_URL = this.getBaseUrl()
        this.trabajosImg = [
            { name: "El Velo de la Memoria", url: `${this.BASE_URL}assets/images/galeria/el_velo_de_la_memoria.webp`, category: "digital" },
            { name: "Tigre Café", url: `${this.BASE_URL}assets/images/galeria/tigrer_cafe.webp`, category: "digital" },
            { name: "Inclinación Interior", url: `${this.BASE_URL}assets/images/galeria/inclinacion_interior_2.webp`, category: "escultura" },
        ];

        this.storeImg = [
            {
                name: "Ecos del Bosque",
                description: "Óleo sobre lienzo",
                url: `${this.BASE_URL}assets/images/galeria/ecos_del_bosque.webp`,
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€"
            },
            {
                name: "El Último Testigo",
                description: "Óleo sobre lienzo",
                url: `${this.BASE_URL}assets/images/galeria/leon.webp`,
                category: "fisico",
                price: 156,
                oldPrice: 165,
                currency: "€"
            },
            {
                name: "Entre Piedra y Eternidad",
                description: "Óleo sobre lienzo",
                url: `${this.BASE_URL}assets/images/galeria/cielo.webp`,
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€"
            },
        ];
    }
    getBaseUrl() {
        const hostname = window.location.hostname;
        const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

        return isLocal ? "/" : "/javier_revelo/";
    }

    getData(viewType) {
        return viewType === "tienda" ? this.storeImg : this.trabajosImg;
    }

    connectedCallback() {
        const viewType = this.getAttribute("view-type")
        this.render(viewType)
    }

    render(viewType) {
        const data = this.getData(viewType);
        this.innerHTML = `
      <div class="trabajos__cards gallery">
        ${data.map((objImg) => `
          <div class="item" data-category="${objImg.category}">
              <div class="image-container">
                  <img src="${objImg.url}" alt="${objImg.name}">
                  <div class="overlay">
                      <h3>${objImg.name}</h3>
                        ${
                            viewType === "tienda"
                            ? `
                                <p class="price">
                                    <span class="old-price">${objImg.oldPrice} ${objImg.currency}</span>
                                    <span class="new-price">${objImg.price} ${objImg.currency} IVA incl</span>
                                </p>
                                <a href="#">Comprar</a>
                            `
                            : `
                                <a href="#">- Ver -</a>
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
