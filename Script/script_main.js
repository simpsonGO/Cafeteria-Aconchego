  <script>
    const scrollTopBtn = document.getElementById('scrollTop');
    window.onscroll = function () {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  </script>