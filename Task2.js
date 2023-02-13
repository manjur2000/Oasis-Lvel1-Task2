const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
navmenu.addEventListener("click", () => {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
})