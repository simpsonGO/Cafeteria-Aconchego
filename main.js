// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Menu mobile
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('open');
});

// Animações on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
document.querySelectorAll('.menu-card, .gallery-grid img, .testimonial').forEach(el => observer.observe(el));

// Slider depoimentos
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
const showTest = i => testimonials.forEach((t, idx) => t.classList.toggle('active', idx === i));
showTest(current);
document.querySelector('.slider-prev').addEventListener('click', () => showTest(current = (current - 1 + testimonials.length) % testimonials.length));
document.querySelector('.slider-next').addEventListener('click', () => showTest(current = (current + 1) % testimonials.length));

// Formulário
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', e => {
  e.preventDefault(); feedback.textContent = 'Enviando...';
  setTimeout(() => { feedback.textContent = 'Mensagem enviada com sucesso!'; form.reset(); }, 1500);
});