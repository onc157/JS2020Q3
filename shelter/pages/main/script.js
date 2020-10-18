let burgerMenu = document.querySelector('.header-burger-menu');
let burgerLogo = document.querySelector('.header-burger');
let headerLogo = document.querySelector('.header-logo');
let burgerWrapper = document.querySelector('.burger-wrapper');
let firstItemInBurgerList = document.querySelector('.burger-list').children[0];

const closeBurger = () => {
    burgerLogo.classList.toggle('header-burger--active');
    burgerMenu.classList.toggle('header-burger-menu--active');
    burgerWrapper.classList.toggle('burger-wrapper--active');
    headerLogo.classList.toggle('header-logo--disabled');
}

burgerLogo.addEventListener('click', () => closeBurger());
burgerWrapper.addEventListener('click', () => closeBurger());
firstItemInBurgerList.addEventListener('click', () => closeBurger());
burgerMenu.addEventListener('click', (event) => event.stopPropagation())


