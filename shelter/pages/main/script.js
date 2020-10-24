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
const totalSlides = 24;
const slidesToShow = 3;
const slidesToScroll = 3;
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.slider-button__left');
const btnNext = document.querySelector('.slider-button__right');
let items;
const itemWidth = 1080 / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
let pets;

// Add Slider Items On Slider-Track
const generateItems = (pets) => {
    for (let i = 0; i < 24 / 8; i = i + 1) {
        pets.forEach((elem) => {
            sliderTrack.insertAdjacentHTML('afterbegin', `<div class="slider-track__item">
        <div class="slider-track__item--photo">
            <img src="${elem.img}" alt="${elem.name}">
        </div>
        <div class="slider-track__item--name">${elem.name}</div>
        <button class="slider-track__item--button">Learn more</button>
        </div>`)})
    }
}

// Parse Slider Items
const parseSliderItems = async () => {
    const src = '../../assets/json/pets.json'
    const res = await fetch(src);
    pets = await res.json();
    console.log(pets);

    generateItems(pets);

    items = document.querySelectorAll('.slider-track__item');
}

btnPrev.addEventListener('click', () => {
    if (position === 0) {
        position = -7560;
        setPosition();
    } else {
        position += movePosition;
        console.log('position', position);

        setPosition()
    }
})

btnNext.addEventListener('click', () => {
    if ((position / itemWidth - slidesToShow) % totalSlides === 0) {

        generateItems(pets);
        console.log(itemWidth);
        console.log('Generate new items');
    }
    position -= movePosition;
    console.log('position', position);

    setPosition();
})

const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`
}


parseSliderItems();