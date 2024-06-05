const hamburgerBtn = document.getElementById("hamberger");
const closeBtn = document.getElementById("close");
const menuNav = document.getElementById("menu");
const mainDiv = document.getElementById("main");
const snapscanLogoWhite = document.getElementById("snapscan-white");
const snapscanLogo = document.getElementById("snapscan");
function show() {
  menuNav.classList.remove("hidden");
  menuNav.classList.add("block");
  mainDiv.classList.add("nav-expanded");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
  hamburgerBtn.classList.add("hidden");
  hamburgerBtn.classList.remove("block");
  snapscanLogoWhite.classList.add("block");
  snapscanLogoWhite.classList.remove("hidden");
  snapscanLogo.classList.add("nav-expanded");
}

function close() {
  menuNav.classList.remove("block");
  menuNav.classList.add("hidden");
  closeBtn.classList.remove("block");
  closeBtn.classList.add("hidden");
  hamburgerBtn.classList.add("block");
  hamburgerBtn.classList.remove("hidden");
  mainDiv.classList.remove("nav-expanded");
  snapscanLogoWhite.classList.add("hidden");
  snapscanLogoWhite.classList.remove("block");
  snapscanLogo.classList.remove("nav-expanded");
}

hamburgerBtn.addEventListener("click", show);
closeBtn.addEventListener("click", close);
