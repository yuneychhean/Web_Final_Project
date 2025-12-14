  const mobileMenu = document.getElementById("mobileMenu");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  document.getElementById("GetStart").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
  });

  openBtn.onclick = () => mobileMenu.classList.remove("hidden");
  closeBtn.onclick = () => mobileMenu.classList.add("hidden");

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  /// All Login buttons
document.querySelectorAll(".Loginbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "Login.html";
  });
});

// All Register buttons
document.querySelectorAll(".Registerbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "Register.html";
  });
});

// Back buttons (if any)
document.querySelectorAll(".Backbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "Home.html";
  });
});




