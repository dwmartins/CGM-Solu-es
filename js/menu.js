const effectmenuOpen = document.querySelector('.menu-hamburguer');

const openMenu = document.querySelector('.navigation-top');

effectmenuOpen.addEventListener('click', function () {
    openMenu.classList.toggle('activemenu');
})