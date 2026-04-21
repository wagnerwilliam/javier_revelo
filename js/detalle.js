import { Utils } from "./componentes/utils.js"

/**
 * Componente Web: Detalle de producto
 * Maneja:
 * - Render del producto
 * - Galería de imágenes
 * - Carrito en sessionStorage
 * - UI interactiva
 */
class Detalle extends HTMLElement {

    constructor() {
        super()
        this.utils = new Utils()
        this.TIENDA = "tienda"
    }

    /**
     * Lifecycle del Web Component
     * Se ejecuta cuando el componente entra al DOM
     * @returns {void}
     */
    connectedCallback() {
        const params = new URLSearchParams(window.location.search)
        let viewType = params.get("type")
        const data = this.utils.getData(viewType)
        const item = data.find(obj => obj.id == params.get("id"))
        this.render(item, viewType)

        this.updateCartCount()
        this.initEvents(item)
    }

    /**
     * Inicializa eventos de UI del detalle
     * @param {ProductItem} item
     * @returns {void}
     */
    initEvents(item) {
        //const removeBtn = this.querySelector(".cart-item__remove")
        const button = this.querySelector(".btn__add");
        const input = this.querySelector(".quantity__input");
        //const container = this.querySelector(".section_detail_store__img");
        const cartBtn = this.querySelector(".cart-fixed");
        const cartPanel = this.querySelector(".cart-panel");
        const closeBtn = this.querySelector(".cart-close");
        //const id = container.dataset.id;

        /**
         * Añadir producto al carrito
         */
        button.addEventListener("click", () => {
            const quantity = Number(input.value);

            if (quantity < 1) {
                alert("Cantidad inválida");
                return;
            }

            const product = {
                id: item.id,
                name: item.name,
                image: mainImage.src,
                price: item.price,
                quantity
            };

            this.addToCart(product);
        });

        //removeBtn.addEventListener("click", this.removeFromCart(id))

        /**
         * Abrir/cerrar carrito
         */
        cartBtn.addEventListener("click", () => {
            cartPanel.classList.toggle("active");
            this.renderCartItems();
        });

        /**
         * Cerrar carrito
         */
        closeBtn.addEventListener("click", () => {
            cartPanel.classList.remove("active");
        });

    }

    /**
     * Elimina un producto del carrito  no funka :/
     * @param {string} id
     * @returns {void}
     */
    removeFromCart(id) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        cart = cart.filter(item => item.id != id);

        sessionStorage.setItem("cart", JSON.stringify(cart));

        this.renderCartItems();
    }

    /**
     * Añade o actualiza producto en el carrito
     * @param {CartProduct} product
     * @returns {void}
     */
    addToCart(product) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += product.quantity;
        } else {
            cart.push(product);
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));
        this.updateCartCount();
        this.animateCart()
    }

    /**
     * Actualiza contador visual del carrito
     * @returns {void}
     */
    updateCartCount() {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const total = cart.reduce((acc, item) => acc + item.quantity, 0);
        const counter = document.querySelector(".cart-count");

        if (counter) {
            counter.textContent = total;
        }
    }

    /**
     * Animación del icono del carrito
     * @returns {void}
     */
    animateCart() {
        const cart = document.querySelector(".cart-fixed");
        if (!cart) return;
        cart.classList.add("bump");
        setTimeout(() => {
            cart.classList.remove("bump");
        }, 200);
    }

    /**
     * Renderiza items del carrito en UI
     * @returns {void}
     */
    renderCartItems() {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const container = document.querySelector(".cart-items");

        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = "<p>Carrito vacío</p>";
            return;
        }

        container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img class="cart-item__image" src="${item.image}" alt="">
            <div class="cart-item__info">
                <p class="cart-item__name">${item.name}</p>
                <p>${item.price} €</p>
                <span class="cart-item__quantity">Cantidad: ${item.quantity}</span>
            </div>
            <button class="cart-item__remove">x</button>
        </div>
        `).join("");
    }

    /**
     * Render principal del componente
     * @param {ProductItem} item
     * @param {string | null} viewType
     * @returns {void}
     */
    render(item, viewType) {        
        this.innerHTML = `
        <section class="section section_detail">
            <nav class="breadcrumbs">
                <a href="index.html">Inicio</a>
                <span>›</span>
                <a href="trabajos.html">Galería</a>
                <span>›</span>
                <span class="current">${item.name}</span>
            </nav>

            ${viewType === this.TIENDA ? `
                <div class="cart-fixed">
                    <i class="ri-shopping-cart-2-fill"></i>
                    <span class="cart-count">0</span>
                </div>
                <div class="cart-panel">
                    <button class="cart-close">x</button>
                    <h3>Carrito</h3>
                    <div class="cart-items"></div>
                    <div class="cart-footer">
                        <button class="cart-checkout">Ir a pagar</button>
                    </div>
                </div>
                <div class="section_detail_store__img" data-id="${item.id}">
                    <img id="mainImage" class="mainImage" src="${item.mainImg}" alt="">
                    <div class="store_thumbs">
                        ${item.secondImg ? `<img src="${item.secondImg}" class="thumb">` : ""}
                        ${item.thirdImg ? `<img src="${item.thirdImg}" class="thumb">` : ""}
                        <img src="${item.mainImg}" class="thumb active">
                    </div>
                </div>

                <div class="section_detail_store__content">
                    <h3>${item.name} | ${item.description}</h3>
                    <p class="price">
                        <span class="old-price">${item.oldPrice} ${item.currency}</span>
                        <span class="new-price dark">${item.price} ${item.currency} <span class="iva">IVA incl</span></span>
                    </p>
                    ${item.statement}
                    <br>    
                    ${item.year ? `<p><strong>Año:</strong> ${item.year}</p>` : ""}
                    ${item.description ? `<p><strong>Técnica:</strong> ${item.description}</p>` : ""}
                    ${item.dimensions ? `<p><strong>Dimensiones:</strong> ${item.dimensions}</p>` : ""}

                    <div class="quantity__block">
                        <input type="number" value="1" min="1" class="quantity__input">
                        <button class="btn__add">Añadir al carrito</button>
                    </div>
                </div>

            ` : `
            <div class="section_detail__content">
                ${item.statement}
            </div>
            
            <div class="section_detail__img">
                <img id="mainImage" src="${item.mainImg}" alt="">
            </div>
            
            <div class="thumbs">
                ${item.secondImg ? `<img src="${item.secondImg}" class="thumb">` : ""}
                ${item.thirdImg ? `<img src="${item.thirdImg}" class="thumb">` : ""}
                <img src="${item.mainImg}" class="thumb active">
            </div>
            
            `}
            
        </section>
        `
    }
}

customElements.define("my-details", Detalle)

/**
 * Selecciona la Imagen principal.
 * @type {HTMLImageElement | null}
 */
const mainImage = document.getElementById("mainImage");

/** 
 * Lista de thumbnails (miniaturas)
 * @type {NodeListOf<HTMLImageElement>}
 */
const thumbs = document.querySelectorAll(".thumb");

/**
 * Array con las URLs de todas las imágenes
 * Se extraen desde los thumbnails
 * @type {string[]}
 */
const images = Array.from(thumbs).map(t => t.src);

let currentIndex = 0;

/**
 * Recorre cada thumbn para asignarle un evento click
 */
thumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        mainImage.classList.add("fade");

        setTimeout(() => {
            currentIndex = index;
            mainImage.src = images[currentIndex];
            mainImage.classList.remove("fade");
        }, 200);

        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});
