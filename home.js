// 1) Surligner le lien de la page actuelle dans le menu
let links = document.querySelectorAll("nav a");
let currentPage = window.location.pathname.split("/").pop();

for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === currentPage) {
        links[i].classList.add("active");
    }
}

// 2) Petit message de bienvenue selon l'heure
let hour = new Date().getHours();
let message;

if (hour < 12) {
    message = "Good morning! Think twice before you buy.";
} else if (hour < 18) {
    message = "Good afternoon! Think twice before you buy.";
} else {
    message = "Good evening! Think twice before you buy.";
}

let title = document.querySelector("h1");
let welcome = document.createElement("p");
welcome.textContent = message;
title.insertAdjacentElement("afterend", welcome);

// 3) Menu burger (petit ecran)
function toggleMenu() {
    let mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("open");
}

// 4) Bouton mode sombre / mode clair (dans la nav bar)
function changeTheme() {
    let themeBtn = document.getElementById("theme-toggle");

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.value = "☀️ Light Mode";
    } else {
        themeBtn.value = "🌙 Dark Mode";
    }
}

