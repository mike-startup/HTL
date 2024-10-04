const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,  // Enable scrolling with the mousewheel
  simulateTouch: true,  // Enable dragging with the mouse
  grabCursor: true,  // Show a hand cursor when dragging
  keyboard: {
    enabled: true,  // Enable keyboard control
    onlyInViewport: true,  // Allow keyboard control even if the slider is not in viewport
  },
  autoplay: {
    delay: 2000,  // Set delay to 3000 milliseconds (3 seconds)
    disableOnInteraction: false,  // Autoplay will not be disabled after user interactions
},
});

