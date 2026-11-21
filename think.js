
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
