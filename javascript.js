let text = document.getElementById("a");
let remove = document.getElementById("remove");
let play = document.getElementById("play");
let result = document.getElementById("result");
let reload = document.getElementById("reload");

// Load the stored text content on page load
window.onload = () => {
    const savedText = localStorage.getItem("resultat");
    if (savedText) {
        text.value = savedText;
        result.innerHTML = savedText;
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme;
    }
};

// Save text content to localStorage and display it in result
play.addEventListener("click", () => {
    result.innerHTML = text.value;
    localStorage.setItem("resultat", text.value);
});

// Clear the result area but restore the last saved content in the textarea
remove.addEventListener("click", () => {
    result.innerHTML = "";
    text.value = localStorage.getItem("resultat") || "";
});

// Reload the page when the reload button is clicked
reload.addEventListener("click", () => {
    location.reload();
});

// Switch to dark theme
let darkMode = document.getElementById("ba");
darkMode.addEventListener("click", () => {
    document.body.className = "dark-mode";
    localStorage.setItem("theme", "dark-mode");
});

// Switch to light theme
let lightMode = document.getElementById("bb");
lightMode.addEventListener("click", () => {
    document.body.className = "light-mode";
    localStorage.setItem("theme", "light-mode");
});
