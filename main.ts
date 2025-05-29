// Função para carregar um HTML em um elemento pelo ID
async function loadHTML(id: string, url: string): Promise<void> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
        const text = await response.text();
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = text;
        } else {
            console.warn(`Elemento com id "${id}" não encontrado.`);
        }
    } catch (error) {
        console.error(error);
    }
}

// Carregar nav e footer
loadHTML('nav-placeholder', 'nav.html');
loadHTML('footer-placeholder', 'footer.html');

// Scroll suave para âncoras internas
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href) return;
        const target = document.querySelector<HTMLElement>(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle menu mobile
const navToggle = document.querySelector<HTMLElement>('.nav-toggle');
const navList = document.querySelector<HTMLElement>('.nav-list');
if (navToggle && navList) {
    navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Animações ao scroll com IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });

document.querySelectorAll<HTMLElement>('.menu-card, .gallery-grid img, .testimonial').forEach(el => observer.observe(el));

// Slider de depoimentos
const testimonials = document.querySelectorAll<HTMLElement>('.testimonial');
let current = 0;

function showTestimonial(index: number) {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
}

if (testimonials.length > 0) {
    showTestimonial(current);

    const prevBtn = document.querySelector<HTMLElement>('.slider-prev');
    const nextBtn = document.querySelector<HTMLElement>('.slider-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + testimonials.length) % testimonials.length;
            showTestimonial(current);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % testimonials.length;
            showTestimonial(current);
        });
    }
}

// Formulário de contato - simulação de envio
const form = document.getElementById('contact-form') as HTMLFormElement | null;
const feedback = document.getElementById('form-feedback');

if (form && feedback) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        feedback.textContent = 'Enviando...';
        setTimeout(() => {
            feedback.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        }, 1500);
    });
}
