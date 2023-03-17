"use strict";

//menu icon in header

const toggleBtn = document.querySelector(".header__toggle-btn");
const toggleBtnIcon = document.querySelector(".header__toggle-btn i");
const dropDownMenu = document.querySelector(".header__dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark menu-icon"
    : "fa-solid fa-bars menu-icon";
};

// ----------------------------------------------------------

//bg-color in dropdown menu on click

const drpdwnLink = document.querySelectorAll(".drpdwn-link");

drpdwnLink.forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.backgroundColor = "#214675";
    setTimeout(function () {
      element.style.backgroundColor = "";
    }, 200);
  });
});
// ----------------------------------------------------------
