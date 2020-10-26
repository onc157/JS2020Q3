const body = document.querySelector('body');
// Burger variables
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerLogo = document.querySelector('.header-burger');
const headerLogo = document.querySelector('.header-logo');
const burgerWrapper = document.querySelector('.burger-wrapper');
const firstItemInBurgerList = document.querySelector('.burger-list').children[0];
const burgerItem = document.querySelector('.burger-list__item > a');
// Popup variables
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup-body');
const popupBtnClose = document.querySelector('.popup-button');
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
// Slider variables
let pets = [];
let fullPetsList = [];
let position = 0;
let sliderWidth = 0;
let sliderItemsCount = 0;
let slideNumber = 1
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.slider-button__left');
const btnNext = document.querySelector('.slider-button__right');

// Parse items of the JSON
const parseItems = async () => {
    const src = '../../assets/json/pets.json'
    const res = await fetch(src);
    pets = await res.json();

    fullPetsList = (() => {
        let tempArr = [];
        for (let i = 0; i < 6; i++) {
            const newPets = pets;

            for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd, 1)[0];
                newPets.push(randElem);
            }

            tempArr = [...tempArr, ...newPets];
        }

        return tempArr;
    })();

    return fullPetsList;
}

// Sort items for slider
const parseSliderItems = () => {
    parseItems().then(list => {

        const sort6recursively = (list) => {
            const length = list.length;

            for (let i = 0; i < (length / 6); i++) {
                const stepList = list.slice(i * 6, (i * 6) + 6);

                for (let j = 0; j < 6; j++) {
                    const duplItem = stepList.find((item, ind) => {
                        return item.name === stepList[j].name && (ind !== j);
                    });

                    if (duplItem !== undefined) {
                        const ind = (i * 6) + j;
                        const which8OfList = Math.trunc(ind / 8);

                        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

                        sort6recursively(list);
                    }

                }
            }
            return list;
        }

        const sort863 = (list) => {
            list = sort6recursively(list);

            return list;
        }

        fullPetsList = sort863(list);

        return fullPetsList;

    }).then(petsList => {
        // Create slider items in DOM
        createItems = (petsList) => {
            for (let i = 0; i < petsList.length; i++) {
                sliderTrack.insertAdjacentHTML('afterbegin',
                    `<div class="slider-track__item" id="${i}">
                        <div class="slider-track__item--photo">
                            <img src="${petsList[i].img}" alt="${petsList[i].name}">
                        </div>
                        <div class="slider-track__item--name">${petsList[i].name}</div>
                        <button class="slider-track__item--button">Learn more</button>
                    </div>`)

                const popupItem = document.querySelector('.slider-track__item');

                // Add popup listener on click on slide items
                popupItem.addEventListener('click', (e) => {

                    let petsId = e.target.closest('.slider-track__item').id;

                    popupImg.setAttribute('src', `${petsList[petsId].img}`);
                    popupName.textContent = `${petsList[petsId].name}`;
                    popupType.textContent = `${petsList[petsId].type} - ${petsList[petsId].breed}`;
                    popupDescription.textContent = `${petsList[petsId].description}`;
                    popupAge.textContent = `${petsList[petsId].age}`;
                    popupInoculations.textContent = `${petsList[petsId].inoculations}`;
                    popupDiseases.textContent = `${petsList[petsId].diseases}`;
                    popupParasites.textContent = `${petsList[petsId].parasites}`;
                    popupWrapper.classList.toggle('popup-wrapper--active');
                    body.classList.toggle('lock-scroll');
                    popupBody.classList.toggle('popup-body--active');
                })
            }
        }

        createItems(petsList);
        sliderControl();
    })
}

//  Initialize slider control
const sliderControl = () => {
    //  Initialize current width slider and slider items on list
    function currentValue() {
        const sliderItem = document.querySelector('.slider-track__item');

        sliderWidth = sliderContainer.clientWidth;
        sliderItemsCount = fullPetsList.length / Math.floor(sliderWidth / sliderItem.clientWidth);
    }

    // Change slider position
    function sliderMove(number, position) {
        currentValue();
        position = (number * (sliderWidth)) - sliderWidth;
        sliderTrack.style.transform = `translateX(-${position}px)`;
    }

    // Initialize track direction after button click
    function trackDirection(direction) {
        switch (direction) {
            case 'btnPrev':
                slideNumber === 1 ? slideNumber = sliderItemsCount : slideNumber--;
                sliderMove(slideNumber);
                break;
            case 'btnNext':
                slideNumber === sliderItemsCount ? slideNumber = 1 : slideNumber++;
                sliderMove(slideNumber);
                break;
            default:
                break;
        }
    }

    btnNext.addEventListener('click', () => {
        trackDirection('btnNext');
    })

    btnPrev.addEventListener('click', () => {
        trackDirection('btnPrev');
    })

    resize();

    // Update slider when resize
    function resize() {
        window.addEventListener('resize', () => {
            currentValue();
            sliderMove(1, 0);
            slideNumber = 1;
        })

        currentValue();
    }
}

parseItems();
parseSliderItems();


// Popup
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