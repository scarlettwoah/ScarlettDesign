"use strict";

//menu icon in header.

const toggleBtn = document.querySelector(".header__toggle-btn");
const toggleBtnIcon = document.querySelector(".header__toggle-btn i");
const dropDownMenu = document.querySelector(".header__dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("open");
  toggleBtnIcon.classList.toggle("fa-bars");
  toggleBtnIcon.classList.toggle("fa-xmark");
});

document.addEventListener("click", function (event) {
  if (
    !toggleBtn.contains(event.target) &&
    !dropDownMenu.contains(event.target)
  ) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList.remove("fa-xmark");
    toggleBtnIcon.classList.add("fa-bars");
  }
});

// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle("open");

//   const isOpen = dropDownMenu.classList.contains("open");
//   toggleBtnIcon.classList = isOpen
//     ? "fa-solid fa-xmark menu-icon"
//     : "fa-solid fa-bars menu-icon";
// };

// ----------------------------------------------------------

// bg-color in dropdown menu on click.

const drpdwnLink = document.querySelectorAll(".drpdwn-link");

drpdwnLink.forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.backgroundColor = "#2375f1";
    setTimeout(function () {
      element.style.backgroundColor = "";
    }, 100);
  });
});

// ----------------------------------------------------------
