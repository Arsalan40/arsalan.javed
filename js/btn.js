const scrollUpBtn = document.querySelector(".scroll-up-btn");

// Function to toggle the visibility of the scroll-up button
function toggleScrollUpButton() {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.remove("hidden");
  } else {
    scrollUpBtn.classList.add("hidden");
  }
}

// Function to scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Event listeners
window.addEventListener("scroll", toggleScrollUpButton);
scrollUpBtn.addEventListener("click", scrollToTop);

// Check scroll position on page load
toggleScrollUpButton();
