// Get all "Add to Cart" buttons
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const image = button.dataset.image;

    // Get existing cart or empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.qty += 1; // increase quantity
    } else {
      cart.push({ name, price, image, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);

  });
});
