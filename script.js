const images = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;

// Create dots
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  images[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  images[index].classList.add("active");
  dots[index].classList.add("active");
}

// Next / Prev
function nextSlide() {
  let i = (index + 1) % images.length;
  showSlide(i);
}

function prevSlide() {
  let i = (index - 1 + images.length) % images.length;
  showSlide(i);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto slide
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Pause on hover
document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

// Init
showSlide(index);
startAutoSlide();