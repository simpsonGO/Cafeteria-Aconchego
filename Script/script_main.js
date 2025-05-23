const scrollTopBtn = document.getElementById('scrollTop');
window.onscroll = function () {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

 const scrollTopBtn = document.getElementById('scrollTop');
    window.onscroll = function () {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    function subscribeNewsletter(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const message = document.getElementById('message');
      message.textContent = `Thanks for subscribing, ${email.split('@')[0]}!`;
      document.getElementById('emailInput').value = '';
    }