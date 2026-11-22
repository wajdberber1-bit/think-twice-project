// Menu burger (petit ecran)
function toggleMenu() {
    let mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("open");
}

// Bouton mode sombre / clair
function changeTheme() {
    let themeBtn = document.getElementById("theme-toggle");

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.value = "☀️ Light Mode";
    } else {
        themeBtn.value = "🌙 Dark Mode";
    }
}

// 1) Remplir le nom et le prix du produit (envoyes par le bouton Think Twice)
let params = new URLSearchParams(window.location.search);
let productName = params.get("name");
let productPrice = params.get("price");

if (productName) {
    document.getElementById("product").value = productName;
}
if (productPrice) {
    document.getElementById("price").value = productPrice;
}

// 2) Bouton Verdict
function showVerdict() {
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let budget = document.getElementById("budget").value;
    let frequency = document.getElementById("frequency").value;
    let reason = document.getElementById("reason").value;
    let own = document.getElementById("own").value;

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    // Si une reponse manque, on affiche le message d'erreur
    if (product === "" || price === "" || budget === "" || frequency === "" || reason === "" || own === "") {
        error.classList.remove("hidden");
        result.classList.add("hidden");
        return;
    }

    error.classList.add("hidden");

    // Score du besoin : frequence + raison + "je n'ai pas deja un produit"
    let needScore = Number(frequency) + Number(reason) + Number(own);
    let budgetOk = Number(budget) >= Number(price);

    let title = document.getElementById("result-title");
    let text = document.getElementById("result-text");

    result.classList.remove("buy", "wait", "no");

    if (needScore <= 2) {
        title.textContent = "❌ You don't need it";
        text.textContent = product + " looks like an impulse. Keep your DT!";
        result.classList.add("no");
    } else if (needScore >= 4 && budgetOk) {
        title.textContent = "✅ Buy it now";
        text.textContent = "You really need " + product + " and your budget allows it.";
        result.classList.add("buy");
    } else {
        title.textContent = "⏳ Wait";
        if (budgetOk) {
            text.textContent = product + " is a good idea, but it is not the right moment yet.";
        } else {
            text.textContent = product + " is a good idea, but it is above your budget. Wait and save more.";
        }
        result.classList.add("wait");
    }

    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
}

// 3) Les choix

// Buy : on garde le produit puis on va vers Contact (livraison)
function buyNow() {
    let product = {
        name: document.getElementById("product").value,
        price: document.getElementById("price").value
    };
    localStorage.setItem("order", JSON.stringify(product));
    window.location.href = "contact.html";
}

// Basket : on ajoute le produit dans le panier puis on va vers Basket
function addToBasket() {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    basket.push({
        name: document.getElementById("product").value,
        price: document.getElementById("price").value
    });

    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.href = "basket.html";
}

// Ignore : on retourne a la page Home
function wontbuy() {
    window.location.href = "home.html";
}