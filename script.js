// Typewriter effect
const typewriterText = "Video Editor • Digital Creator • Web Developer • Graphic Designer";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter-text').innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    themeToggle.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });

  // Mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Modal functions
  window.openModal = function(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
  };

  window.closeModal = function() {
    document.getElementById("modal").style.display = "none";
  };

  // Scroll animations
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});