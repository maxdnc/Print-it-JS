const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération des flèches
const arrowLeft = document.querySelector("#js-arrow_left");
const arrowRight = document.querySelector("#js-arrow_right");

// Récupération et création des bullets points en fonction du nombre d'images dans le tableau "slides".
const dotContainer = document.querySelector("#js-dots");
const dotCount = slides.length - 1; // une variable de type tableau commence toujours à 0 et non pas à 1.

for (let i = 0; i <= dotCount; i++) {
  // boucle for
  const newDot = document.createElement("span"); // creation de element
  newDot.classList.add("dot"); // add class a cet element
  dotContainer.appendChild(newDot); // add in container .
}

// Récupération des bullets point créés
const dots = document.querySelectorAll(".dot");

// Creation de variable
let currentSlide = 0;

function updateCarousel(current) {
  // Mise à jour des bullets
  dots.forEach((item, index) => {
    if (index === current) {
      item.classList.add("dot_selected");
    } else {
      item.classList.remove("dot_selected");
    }
  });

  // Mise à jour de l'image et du texte.
  const banner = document.querySelector("#js-banner-img");
  const textBanner = document.querySelector("#js-text-img");
  const currentImage = slides[current].image;
  const currentText = slides[current].tagLine;

  banner.src = `./assets/images/slideshow/${currentImage}`;
  textBanner.innerHTML = currentText;
  console.log(current);
}

////

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel(currentSlide);
  });
});

arrowRight.addEventListener("click", () => {
  if (currentSlide < dotCount) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  console.log("arrow right");
  updateCarousel(currentSlide);
});

arrowLeft.addEventListener("click", () => {
  if (currentSlide <= 0) {
    currentSlide = dotCount;
  } else {
    currentSlide--;
  }
  console.log("arrow left");
  updateCarousel(currentSlide);
});

updateCarousel(currentSlide);
