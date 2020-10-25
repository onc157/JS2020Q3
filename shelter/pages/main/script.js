const body = document.querySelector('body');
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerLogo = document.querySelector('.header-burger');
const headerLogo = document.querySelector('.header-logo');
const burgerWrapper = document.querySelector('.burger-wrapper');
const firstItemInBurgerList = document.querySelector('.burger-list').children[0];
const burgerItem = document.querySelector('.burger-list__item > a');
// Popup
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup-body');
const popupBtnClose = document.querySelector('.popup-button');
const popupPhoto = document.querySelector('.popup__photo.img');
const popupName = document.querySelector('.popup-content__name');
const popupType = document.querySelector('.popup-content__type');
const popupDescription = document.querySelector('.popup-content__description');
const popupAge = document.querySelector('.popup__age');
const popupInoculations = document.querySelector('.popup__inoculations');
const popupDiseases = document.querySelector('.popup__diseases');
const popupParasites = document.querySelector('.popup__parasites');


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
let pets;
const totalSlides = 24;
const slidesToShow = 3;
const slidesToScroll = 3;
const sliderContainer = document.querySelector('.slider-container'); // Delete
const sliderTrack = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.slider-button__left');
const btnNext = document.querySelector('.slider-button__right');
const itemWidth = 1080 / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// Parse Slider Items
const parseSliderItems = async () => {
    // console.log('Начинаю загрузку JSON...'); //
    const src = '../../assets/json/pets.json'
    const res = await fetch(src);
    pets = await res.json();
    // console.log('Загрузка завершена!'); //
    console.log(pets); //
    return pets;
}

// Add Slider Items On Slider-Track
const generateItems = () => {
    parseSliderItems()
        .then((data) => {
            // console.log('Начинаю создавать элементы...'); //
            for (let i = 0; i < 24 / 8; i = i + 1) {
                data.forEach((elem, j) => {
                    sliderTrack.insertAdjacentHTML('afterbegin',
                        `<div class="slider-track__item" id="${j}">
                        <div class="slider-track__item--photo">
                            <img src="${elem.img}" alt="${elem.name}">
                        </div>
                        <div class="slider-track__item--name">${elem.name}</div>
                        <button class="slider-track__item--button">Learn more</button>
                        </div>`
                    )
                    // console.log(`Создаю элемент:`, elem) //
                    const popupItem = document.querySelector('.slider-track__item');
                        popupItem.addEventListener('click', (e) => {

                            let petsId = e.target.closest('.slider-track__item').id;
                            console.log(petsId);

                            popupImg.setAttribute('src', `${pets[petsId].img}`);
                            popupName.textContent = `${pets[petsId].name}`;
                            popupType.textContent = `${pets[petsId].type} - ${pets[petsId].breed}`;
                            popupDescription.textContent = `${pets[petsId].description}`;
                            popupAge.textContent = `${pets[petsId].age}`;
                            popupInoculations.textContent = `${pets[petsId].inoculations}`;
                            popupDiseases.textContent = `${pets[petsId].diseases}`;
                            popupParasites.textContent = `${pets[petsId].parasites}`;
                            popupWrapper.classList.toggle('popup-wrapper--active');
                            body.classList.toggle('lock-scroll');
                            popupBody.classList.toggle('popup-body--active');
                    })
                })
            }
            // console.log('Создание элементов завершено!') //
        })
}
generateItems();

btnPrev.addEventListener('click', () => {
    if (position === 0) {
        position = -7560;

        setPosition();
    } else {
        position += movePosition;

        setPosition()
    }
})

btnNext.addEventListener('click', () => {
    if ((position / itemWidth - slidesToShow) % totalSlides === 0) {

        generateItems();
    }
    position -= movePosition;

    setPosition();
})

const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`
}

parseSliderItems();

// Popup Close
const popupClose = () => {
    popupWrapper.classList.toggle('popup-wrapper--active');
    popupBody.classList.toggle('popup-body--active');
    body.classList.toggle('lock-scroll');
}

popupBtnClose.addEventListener('click', () => popupClose());
popup.addEventListener('click', () => popupClose());
popupBody.addEventListener('click', (e) => e.stopPropagation());

popup.addEventListener('mouseover', (e) => {
    if (e.target.className === 'popup') {
        popupBtnClose.classList.add('popup-button--active');
    } else {
        popupBtnClose.classList.remove('popup-button--active');
    }
})