import { Utils } from "./componentes/utils.js"


class Detalle extends HTMLElement {

    constructor(){
        super()
        this.utils = new Utils()
        this.TIENDA = "tienda"
    }

    connectedCallback() {
        const params = new URLSearchParams(window.location.search)
        let viewType = params.get("type")
        console.log(viewType);
        const data = this.utils.getData(viewType)
        const item = data.find(obj => obj.id == params.get("id"))
        this.render(item, viewType)

    }

    render(item, viewType){
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
                <div class="section_detail_store__img">
                    <img id="mainImage" class="mainImage" src="${item.mainImg}" alt="">
                    <div class="store_thumbs">
                        ${item.secondImg ? `<img src="${item.secondImg}" class="thumb">`: ""}
                        ${item.thirdImg ? `<img src="${item.thirdImg}" class="thumb">`: ""}
                        <img src="${item.mainImg}" class="thumb active">
                    </div>
                </div>

                <div class="section_detail_store__content">
                    <h3>${item.name} | ${item.description}</h3>
                    <p class="price">
                        <span class="old-price">${item.oldPrice} ${item.currency}</span>
                        <span class="new-price dark">${item.price} ${item.currency} IVA incl</span>
                    </p>
                    ${item.statement}
                    <br>    
                    ${item.year ? `<p><strong>Año:</strong> ${item.year}</p>`: ""}
                    ${item.description ? `<p><strong>Técnica:</strong> ${item.description}</p>`: ""}
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
                ${item.secondImg ? `<img src="${item.secondImg}" class="thumb">`: ""}
                ${item.thirdImg ? `<img src="${item.thirdImg}" class="thumb">`: ""}
                <img src="${item.mainImg}" class="thumb active">
            </div>
            
            `}
            
        </section>
        `
    }
}

customElements.define("my-details", Detalle)


const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");


/**analizar este codigo */
const images = Array.from(thumbs).map(t => t.src);

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

let currentIndex = 0;
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


const button = document.querySelector(".btn__add");
const input = document.querySelector(".quantity__input");

button.addEventListener("click", () => {
  const quantity = Number(input.value);

  if (quantity < 1) {
    alert("Cantidad inválida");
    return;
  }

  const product = {
    id: 1,
    name: "Producto ejemplo",
    quantity: quantity
  };

  addToCart(product);
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  animateCart() 
}


function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((acc, item) => acc + item.quantity, 0);

  const counter = document.querySelector(".cart-count");
  if (counter) {
    counter.textContent = total;
  }
}

function animateCart() {
  const cart = document.querySelector(".cart-fixed");
  if (!cart) return;

  cart.classList.add("bump");

  setTimeout(() => {
    cart.classList.remove("bump");
  }, 200);
}
