document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  if (openMenu && closeMenu && mobileMenu) {
    openMenu.onclick = () => mobileMenu.classList.remove("hidden");
    closeMenu.onclick = () => mobileMenu.classList.add("hidden");
  }

  // Cart dropdown
  const cartBtn = document.getElementById("cartBtn");
  const cartMenu = document.getElementById("cartMenu");

  if (cartBtn && cartMenu) {
    cartBtn.onclick = (e) => {
      e.stopPropagation();
      cartMenu.classList.toggle("hidden");
    };

    document.addEventListener("click", () => {
      cartMenu.classList.add("hidden");
    });
  }
});

// Cart counter
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
}
