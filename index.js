"use strict";

const navSlide = () => {
  const menuMobile = document.querySelector("#menu-button");
  const nav = document.querySelector("#nav-links");
  const navLinks = document.querySelectorAll(".link");

  menuMobile.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s `;
      }
    });
    menuMobile.classList.toggle("open");
  });
};

navSlide();
