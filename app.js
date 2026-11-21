
const burgerBtn = document.getElementById("burger-btn");
const mainNav = document.getElementById("main-nav");

burgerBtn.addEventListener("click", function () {
    
    mainNav.classList.toggle("open");
});

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});