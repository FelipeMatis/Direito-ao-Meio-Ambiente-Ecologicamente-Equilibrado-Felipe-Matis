document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const backToTopButton = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
      setTimeout(() => {
        backToTopButton.style.opacity = '1';
      }, 10);
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.addEventListener('transitionend', function handler() {
        backToTopButton.style.display = 'none';
        backToTopButton.removeEventListener('transitionend', handler);
      });
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
