const menu = document.querySelector("#menu-icon");
const bar = document.querySelector("#sidebar");
menu.addEventListener("click", () => {
  bar.classList.toggle("hidden");
});

const close = document.querySelector("#closs");
close.addEventListener("click", () => {
  bar.classList.toggle("hidden");
});
