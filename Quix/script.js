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
        // Ajusta la velocidad de cada paso
        step.style.animationDelay = `${index * 0.5}s`;

        // Cargar la imagen utilizando Intersection Observer
        const img = step.querySelector('img.lazy');
        if (img) {
          const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            });
          }, { threshold: 0.5 });

          observer.observe(img);
        }
      }
    }
  });

  previousScrollY = currentScrollY;
}

window.addEventListener('scroll', onScroll);














