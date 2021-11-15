const nav = document.querySelector("#nav-links"),
  hamburger = document.querySelector("#hamburgers");
let open = false;

window.addEventListener("resize", () => {
  if (!open) {
    nav.style.height = "55vh";
    nav.style.opacity = "1";
  }
});

hamburger.addEventListener("click", () => {
  if (!open) {
    nav.style.height = "55vh";
    nav.style.opacity = "1";
  } else {
    nav.style.height = "0vh";
    nav.style.opacity = "0";
  }
  open = !open;
});
