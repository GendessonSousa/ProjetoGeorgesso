function rolarParaBaixo() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  function toggleMenu() {
    const navLinks = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    navLinks.classList.toggle('active');
    closeBtn.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
  }

  function closeMenu() {
    const navLinks = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    navLinks.classList.remove('active');
    closeBtn.style.display = 'none';
  }





