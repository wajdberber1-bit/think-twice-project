function toggleMenu() {
    let mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("open");
}

function changeTheme() {
    let themeBtn = document.getElementById("theme-toggle");

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.value = "☀️ Light Mode";
    } else {
        themeBtn.value = "🌙 Dark Mode";
    }
}

let params = new URLSearchParams(window.location.search);
let cat = params.get("cat");

if (cat) {
    let cards = document.querySelectorAll(".product-card");
    let first = null;

    for (let i = 0; i < cards.length; i++) {
        let cardCat = cards[i].querySelector(".product-cat").textContent;

        if (cardCat.toLowerCase() === cat.toLowerCase()) {
            cards[i].classList.add("selected");

            if (first === null) {
                first = cards[i];
            }
        }
    }

    if (first !== null) {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

let categoryLinks = document.querySelectorAll(".dropdown a");
let pageName = window.location.pathname.split("/").pop();

for (let i = 0; i < categoryLinks.length; i++) {
    if (categoryLinks[i].getAttribute("href") === pageName) {
        categoryLinks[i].classList.add("active");
    }
}

let thinkButtons = document.querySelectorAll(".think-btn");

for (let i = 0; i < thinkButtons.length; i++) {
    let card = thinkButtons[i].closest(".product-card");
    let name = card.querySelector("h3").textContent;
    let priceText = card.querySelector(".price").textContent;   // exemple : "3 200 DT"
    let price = priceText.replace("DT", "").split(" ").join(""); // exemple : "3200"

    thinkButtons[i].href = "form.html?name=" + encodeURIComponent(name) + "&price=" + price;
}