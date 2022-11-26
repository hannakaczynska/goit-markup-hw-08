const menuOverlay = document.querySelector('.menu');
const closeMenuButton = document.querySelector('.menu__close-button');
const openMenuBtn = document.querySelector('.menu__icon');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('menu__d-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('menu__d-none');
}); 