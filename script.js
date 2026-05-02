const topbar = document.getElementById('topbar');
const heroVisual = document.getElementById('heroVisual');
const neuralField = document.getElementById('neuralField');
const scrollElements = document.querySelectorAll('[data-reveal]');

window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  topbar.classList.toggle('scrolled', offset > 24);
  document.documentElement.style.setProperty('--weight', Math.min(900, 400 + offset * 0.15));
});

window.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth * 100;
  const y = event.clientY / window.innerHeight * 100;
  neuralField.style.setProperty('--cursor-x', `${x}%`);
  neuralField.style.setProperty('--cursor-y', `${y}%`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

scrollElements.forEach((el) => revealObserver.observe(el));

const transparentCards = document.querySelectorAll('.ai-card, .product-card, .consultancy-card, .process-step');
transparentCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
