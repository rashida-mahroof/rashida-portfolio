// public/observer.js
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  