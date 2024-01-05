const animationElements = document.querySelectorAll('.animation');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, observerOptions);

animationElements.forEach(element => {
  observer.observe(element);
});

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});