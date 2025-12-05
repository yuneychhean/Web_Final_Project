const mobileMenu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
document.getElementById("GetStart").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
});

openBtn.onclick = () => mobileMenu.classList.remove("hidden");
closeBtn.onclick = () => mobileMenu.classList.add("hidden");
