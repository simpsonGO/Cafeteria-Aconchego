document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave do menu
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Modal para galeria de imagens
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.classList.add("image-modal");
      modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <img src="${img.src}" alt="Imagem ampliada">
          <button class="close-btn">×</button>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
      modal.querySelector(".modal-overlay").addEventListener("click", () => modal.remove());
    });
  });

  // Formulário contato - alerta e reset
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = contactForm.querySelector("input[name='name']").value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    contactForm.reset();

    // Animação botão enviar
    const btn = contactForm.querySelector("button");
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });

  // Scroll reveal (fade-in) das seções
  const fadeElems = document.querySelectorAll(".hero-section, .info-section, .cards-section, .gallery-section, .contact-section");
  const revealOnScroll = () => {
    const windowBottom = window.innerHeight + window.scrollY;
    fadeElems.forEach(elem => {
      if (windowBottom > elem.offsetTop + 100) {
        elem.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // reveal on load

  // Animação hover cards serviços
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("active"));
    card.addEventListener("mouseleave", () => card.classList.remove("active"));
  });
});
