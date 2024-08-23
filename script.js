const changeThemeBtn = document.querySelector("#change-theme");


//Toggle dark mode

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toggleDarkMode();
}
}

loadTheme();
//Load light or dark mode


changeThemeBtn.addEventListener("change", function () {
    toggleDarkMode();
// Save or remove dark mode
//Se o body contém o dark mode


localStorage.removeItem("dark");

//validação

if(document.body.classList.contains("dark")) {
localStorage.setItem("dark", 1);

}

});
