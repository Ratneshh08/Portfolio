
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("open");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuToggle.classList.remove('open');
  });
});

const lightbox = GLightbox({ selector: '.glightbox' });

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});
