 
  function toggleMenu() {
    const menuOverlay = document.querySelector('.menu-overlay');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const logo = document.querySelector('.logo');

   
    menuOverlay.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');

    
    logo.classList.toggle('hidden');
  }


  function updateMenu() {
    const mainMenu = document.querySelector('nav .main-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const logo = document.querySelector('.logo');

    if (window.innerWidth > 1072) {
    
      mainMenu.style.display = 'flex';
      hamburgerMenu.style.display = 'none';
      menuOverlay.classList.remove('active');
      hamburgerMenu.classList.remove('active');
      logo.classList.remove('hidden');
    } else {
      
      mainMenu.style.display = 'none';
      hamburgerMenu.style.display = 'block';
    }
  }

 
  window.addEventListener('resize', updateMenu);

 
  window.addEventListener('load', updateMenu);

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 600,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    1507: {
      slidesPerView: 3,
      spaceBetween: -200,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: -300,
    },
    1072: {
      slidesPerView: 3,
      spaceBetween: -300,
    },
    764: {
      slidesPerView: 3,
      spaceBetween: -300,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: -200,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: -300,
    },
  },
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
});
