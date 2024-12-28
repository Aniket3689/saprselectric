document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const openPopupButton = document.getElementById('open-popup');
  const popupForm = document.getElementById('popup-form');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('close-popup');

  mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('open');
  });

  openPopupButton.addEventListener('click', (e) => {
      e.preventDefault();
      popupForm.classList.add('active');
      popupOverlay.classList.add('active');
  });

  popupOverlay.addEventListener('click', () => {
      popupForm.classList.remove('active');
      popupOverlay.classList.remove('active');
  });

  closePopupButton.addEventListener('click', () => {
      popupForm.classList.remove('active');
      popupOverlay.classList.remove('active');
  });
});