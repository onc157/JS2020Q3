const body = document.querySelector('body');
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerLogo = document.querySelector('.header-burger');
const headerLogo = document.querySelector('.header-logo');
const burgerWrapper = document.querySelector('.burger-wrapper');
const secondItemInBurgerList = document.querySelector('.burger-list').children[1];
const burgerItem = document.querySelector('.burger-list__item > a');
const sectionHeader = document.querySelector('.section-header');

// BurgerMenu
const closeBurger = () => {
    sectionHeader.classList.toggle('section-header--active');
    burgerLogo.classList.toggle('header-burger--active');
    burgerMenu.classList.toggle('header-burger-menu--active');
    burgerWrapper.classList.toggle('burger-wrapper--active');
    headerLogo.classList.toggle('header-logo--disabled');
    body.classList.toggle('lock-scroll');
}

burgerLogo.addEventListener('click', () => closeBurger());
burgerWrapper.addEventListener('click', () => closeBurger());
secondItemInBurgerList.addEventListener('click', () => closeBurger());
burgerMenu.addEventListener('click', (event) => event.stopPropagation())