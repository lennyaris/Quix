// JavaScript
let scrolled = false;
let previousScrollY = 0;

function onScroll() {
  if (!scrolled) {
    const header = document.querySelector('.sweep');
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
    scrolled = true;
  }

  const currentScrollY = window.scrollY;
  const direction = currentScrollY > previousScrollY ? 'down' : 'up';
  const sweepElements = document.querySelectorAll('.sweep');

  sweepElements.forEach((element) => {
    if (!element.classList.contains('shown')) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;

      if (isVisible) {
        element.classList.add('shown');
      }
    }
  });

  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    if (!step.classList.contains('shown')) {
      const rect = step.getBoundingClientRect();
      const isVisible = rect.left < window.innerWidth;

      if (isVisible) {
        step.classList.add('shown');

        step.style.animationDelay = `${index * 0.5}s`;
      }
    }
  });

  previousScrollY = currentScrollY;
}

window.addEventListener('scroll', onScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function redirectToPage() {
  window.location.href = "contacto.html";
}

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('nav-list-visible');
});














