// Initialize cart count from localStorage
let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
updateCartCountDisplay();

// Add event listener to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        localStorage.setItem("cartCount", cartCount);
        updateCartCountDisplay();
    });
});

// Update cart count in the navbar
function updateCartCountDisplay() {
    const cartLink = document.getElementById("cart-link");
    if (cartLink) {
        cartLink.textContent = `Cart (${cartCount})`;
    }
}
