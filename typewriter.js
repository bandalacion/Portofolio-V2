function animateOnScroll() {
  const animationElements = document.querySelectorAll('.animation');

  animationElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
          element.classList.add('animate-in');
      }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();