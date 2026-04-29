const images = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;


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


function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}


document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

showSlide(index);
startAutoSlide();


const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

const gap = 10; 
const cardWidth = cards[0].offsetWidth + gap;

document.getElementById("rightBtn").addEventListener("click", () => {
  slider.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });
});

document.getElementById("leftBtn").addEventListener("click", () => {
  slider.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });
});

const cardSlider = document.getElementById("sliders");
const cardItems = document.querySelectorAll(".coll-div");

if (cardItems.length > 0) {
  const gap = 40;
  const cardWidth = cardItems[0].offsetWidth + gap;

  document.getElementById("rightBtns").addEventListener("click", () => {
    cardSlider.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });

  document.getElementById("leftBtns").addEventListener("click", () => {
    cardSlider.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });
}
const nav = document.getElementById("navbar");
const toggleBtn = document.getElementById("menuToggle");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

 
  if (currentScroll > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.remove("expanded"); 
  }

 
  if (currentScroll < lastScroll) {
    nav.classList.remove("expanded");
  }
if (currentScroll > lastScroll) {
    nav.classList.remove("expanded");
  }
  lastScroll = currentScroll;
}

);


toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("expanded");
});