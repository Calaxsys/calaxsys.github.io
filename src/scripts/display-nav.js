const menuToggle = document.querySelector('.mobile-menu-toggle')
const nav = document.querySelector('.primary-navigation')
const navUL = document.querySelector('.primary-nav-ul')
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
  menuToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
      nav.setAttribute("data-visible", "true");
      menuToggle.setAttribute("aria-expanded", "true");
      navUL.setAttribute("aria-expanded", "true");
    } else {
      nav.setAttribute("data-visible", "false");
      menuToggle.setAttribute("aria-expanded", "false");
      navUL.setAttribute("aria-expanded", "false");
    }

    // nav.classList.toggle("open");

    // if (nav.classList.contains("open")) {
    //   body.style.overflow = "hidden";
    // } else {
    //   body.style.overflow = "";
    // }
  })
})