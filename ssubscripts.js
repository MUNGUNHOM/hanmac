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