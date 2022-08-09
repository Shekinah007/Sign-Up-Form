document.addEventListener(
  "DOMContentLoaded",
  function () {
    setTheme();
  },
  false
);

function setTheme() {
  const root = document.documentElement;
  root.className = root.className === "light" ? "dark" : "light";
}

document.querySelector(".theme-button").addEventListener("click", () => {
  setTheme();
});
