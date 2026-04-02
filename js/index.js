const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

// 🔥 guardas todas las imágenes
const images = Array.from(thumbs).map(t => t.src);

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
