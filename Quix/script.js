let scrolled = false;
let previousScrollY = 0;

function onScroll() {
  if (!scrolled) {
    const header = document.querySelector('.sweep');
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
    scrolled = true;
  }

  const sections = document.querySelectorAll('.section');
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > previousScrollY ? 'down' : 'up';

  if (currentScrollY !== previousScrollY) {
    sections.forEach((section) => {
      if (direction === 'down') {
        const nextSection = section.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      } else if (direction === 'up') {
        const prevSection = section.previousElementSibling;
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
    });

    previousScrollY = currentScrollY;
  }
}

window.addEventListener('scroll', onScroll);


