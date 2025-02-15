function rolarParaBaixo() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  /*
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


const NavMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener('click', () =>{
      NavMenu.classList.add("show-menu")
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
      NavMenu.classList.remove("show-menu")
    })
}*/

const navMenu = document.getElementById('nav-menu'),
      navMenuft = document.getElementById('navbar-footer'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navToggleFt = document.getElementById('nav-toggle-ft'),
      body = document.body,
      deixarInvisivel = document.getElementById('hidden');

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
      body.classList.add('no-scroll');
      deixarInvisivel.classList.add('invisivel');
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      body.classList.remove('no-scroll');
      deixarInvisivel.classList.remove('invisivel');
   })
}

/* Menu ft show */
if(navToggleFt){
  navToggleFt.addEventListener('click', () =>{
     navMenuft.classList.add('show-menu-ft');
     body.classList.add('no-scroll');
     deixarInvisivel.classList.add('invisivel');
  })
}

