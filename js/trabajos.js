/**
 * Botones del filtro (HTMLButtonElement)
 * @type {NodeListOf<HTMLButtonElement>}
 * Elementos de la galería (HTMLElement)
 * @type {NodeListOf<HTMLElement>}
 */
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".gallery .item");

/**
 * Recorre cada botón para asignarle funcionalidad.
 * Relacionado con el filtro de taxonomías (categorías).
 */
buttons.forEach(button => {
  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    items.forEach(item => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});


const images = document.querySelectorAll(".image-container img");

window.addEventListener("scroll", () => {
  images.forEach(img => {
    const rect = img.getBoundingClientRect();

    // posición relativa al viewport
    const windowHeight = window.innerHeight;

    // porcentaje de visibilidad
    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

    // limitamos el movimiento
    const movement = (progress - 0.5) * 10; // 👈 intensidad

    img.style.transform = `translateY(${movement}px)`;
  });
});



// reubicar..... esto es del hero
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // controla la intensidad (ajusta este valor)
  const speed = 0.5;

  hero.style.backgroundPosition = `center ${scrollY * speed}px`;
});