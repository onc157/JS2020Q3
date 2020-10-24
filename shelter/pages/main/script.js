const body = document.querySelector('body');
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerLogo = document.querySelector('.header-burger');
const headerLogo = document.querySelector('.header-logo');
const burgerWrapper = document.querySelector('.burger-wrapper');
const firstItemInBurgerList = document.querySelector('.burger-list').children[0];
const burgerItem = document.querySelector('.burger-list__item > a');

// BurgerMenu
const closeBurger = () => {
    burgerLogo.classList.toggle('header-burger--active');
    burgerMenu.classList.toggle('header-burger-menu--active');
    burgerWrapper.classList.toggle('burger-wrapper--active');
    headerLogo.classList.toggle('header-logo--disabled');
    body.classList.toggle('lock-scroll');
}

burgerLogo.addEventListener('click', () => closeBurger());
burgerWrapper.addEventListener('click', () => closeBurger());
firstItemInBurgerList.addEventListener('click', () => closeBurger());
burgerMenu.addEventListener('click', (event) => event.stopPropagation())

// Slider
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.slider-button__left');
const btnNext = document.querySelector('.slider-button__right');
const items = document.querySelectorAll('.slider-track__item');
console.log(items);
const itemsCount = items.length;
console.log(itemsCount);
// const itemWidth = sliderContainer.clientWidth / slidesToShow;
const itemWidth = 1080 / slidesToShow; // Will add margins
const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`;
// })

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;;

    setPosition();
    checkButtons();
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
})

const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`
}


const checkButtons = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkButtons();



//Test

// const src = '../../assets/pets.json'

// async function getPets() {
//     const res = await fetch(src);
//     const pets = await res.json();

//     // console.log(JSON.stringify(pets));
//     console.log(pets);
// }

// getPets();
// /Test