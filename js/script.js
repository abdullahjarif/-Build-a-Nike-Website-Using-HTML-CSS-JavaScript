// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".ri-menu-line");
  const navList = document.querySelector(".nav_1 ul");
  const shopBtn = document.querySelector(".shop_btn");
  const rightContent = document.querySelector(".right_content");
  const cartIcon = document.querySelector(".ri-shopping-cart-fill");
  const searchIcon = document.querySelector(".ri-search-line");

  // Toggle mobile menu
  menuIcon.addEventListener("click", () => {
    // navList.classList.toggle("show-menu");
    alert("Menu icon feature coming soon");
  });

  // Scroll to products on "Shop Now" click
  shopBtn.addEventListener("click", () => {
    // rightContent.scrollIntoView({ behavior: "smooth" });
    alert("Order Complete");
  });

  // Dummy search functionality
  searchIcon.addEventListener("click", () => {
    alert("Search feature coming soon!");
  });

  // Dummy cart icon functionality
  cartIcon.addEventListener("click", () => {
    alert("Your cart is currently empty.");
  });
});
