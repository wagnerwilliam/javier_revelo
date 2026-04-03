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
