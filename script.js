"use strict"

// BURGER MENUE

// BURGER MENUE BUTTON

const burgerMenueButton = document.querySelector(".burger-menue-button");
const burgerMenue = document.querySelector(".wrapper-burger-menue");
const navigationLinks = document.querySelectorAll(".navigation-link");

// OPEN/CLOSE BURGER MENUE
burgerMenueButton.addEventListener("click", () => {
  burgerMenueButton.classList.toggle("burger-menue-button-close");
  burgerMenue.classList.toggle("wrapper-burger-menue-open");
});

// CLOSE THE BURGER MENU WHEN CLICKING ON THE LINK
for (let i = 0; i < navigationLinks.length; i++) {
  const link = navigationLinks[i];
  link.addEventListener("click", () => {
    burgerMenueButton.classList.remove("burger-menue-button-close");
    burgerMenue.classList.remove("wrapper-burger-menue-open");
  });
}
