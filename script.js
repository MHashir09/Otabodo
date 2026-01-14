const body = document.querySelector("body");
const themeSwitcherBtn = document.querySelector(".mdi-theme-light-dark");
let currentTheme = "light";

themeSwitcherBtn.addEventListener("click", () => {
  if (currentTheme == "light") {
    currentTheme = "dark";
    body.className = "dark-theme";
  } else {
    currentTheme = "light";
    body.className = "";
  }
})
