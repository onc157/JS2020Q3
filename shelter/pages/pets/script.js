const body = document.querySelector('body');
// Burger variables
const burgerMenu = document.querySelector('.header-burger-menu');
const burgerLogo = document.querySelector('.header-burger');
const headerLogo = document.querySelector('.header-logo');
const burgerWrapper = document.querySelector('.burger-wrapper');
const secondItemInBurgerList = document.querySelector('.burger-list').children[1];
const burgerItem = document.querySelector('.burger-list__item > a');
const sectionHeader = document.querySelector('.section-header');
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
// Pagination variables
const paginationWrapper = document.querySelector('.pagination-wrapper');
const btnFirst = document.getElementById('button-first');
const bthPrev = document.getElementById('button-prev');
const showPage = document.getElementById('show-page');
const bthNext = document.getElementById('button-next');
const btnLast = document.getElementById('button-last');

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

//

// Pagination
let pets = [];
let fullPetsList = [];
let petsArr = [];

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

    fullPetsList = sort863(fullPetsList);
    petsArr = fullPetsList;

    createItems = (petsList) => {
        for (let i = 0; i < petsList.length; i++) {
            paginationWrapper.insertAdjacentHTML('afterbegin',
                `<div class="pagination-wrapper__item" id="${i}">
                    <div class="pagination-wrapper__item--photo">
                        <img src="${petsList[i].img}" alt="${petsList[i].name}">
                    </div>
                    <div class="pagination-wrapper__item--name">${petsList[i].name}</div>
                    <button class="pagination-wrapper__item--button">Learn more</button>
                </div>`)

            const popupItem = document.querySelector('.pagination-wrapper__item');

            // Add popup listener on click on slide items
            popupItem.addEventListener('click', (e) => {

                let petsId = e.target.closest('.pagination-wrapper__item').id;

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


    function paginit() {
        let size = 0;
        let page = 0;
        let cutArr = [];

        showPage.innerHTML = `${page + 1}`;

        function getSize() {
            const sizeWindow = document.documentElement.clientWidth;
            if (sizeWindow >= 1280) {
                size = 8;
            } else if (sizeWindow >= 768 && sizeWindow < 1280) {
                size = 6;
            } else if (sizeWindow >= 320 && sizeWindow < 768) {
                size = 3
            }

            return size;
        }
        getSize();

        function sliceArrPets(list, size) {
            let listNew = [...list]; // remove binding
            for (let i = 0; i < list.length / size; i++) {
                cutArr[i] = listNew.splice(0, size);
            }
            return cutArr;
        }

        sliceArrPets(fullPetsList, size);

        function initButtons() {
            if (page === cutArr.length - 1) {
                bthNext.setAttribute("disabled", "disabled")
                btnLast.setAttribute("disabled", "disabled")
            }
            else {
                bthNext.removeAttribute("disabled")
                btnLast.removeAttribute("disabled")
            }

            if (page === 0) {
                btnFirst.setAttribute("disabled", "disabled")
                bthPrev.setAttribute("disabled", "disabled")
            } else {
                btnFirst.removeAttribute("disabled")
                bthPrev.removeAttribute("disabled")
            }
        }

        // Button pagination
        btnFirst.addEventListener('click', () => {
            page = 0;
            showPage.innerHTML = `${page + 1}`;
            paginationWrapper.innerHTML = '';
            createItems(sliceArrPets(fullPetsList, size)[page]);
            initButtons();
        })
        bthPrev.addEventListener('click', () => {
            page--;
            showPage.innerHTML = `${page + 1}`;
            paginationWrapper.innerHTML = '';
            initButtons();
            createItems(sliceArrPets(fullPetsList, size)[page]);
        })
        bthNext.addEventListener('click', () => {
            page++;
            showPage.innerHTML = `${page + 1}`;
            paginationWrapper.innerHTML = '';
            createItems(sliceArrPets(fullPetsList, size)[page]);
            initButtons();
        })
        btnLast.addEventListener('click', () => {
            page = cutArr.length - 1;
            showPage.innerHTML = `${page + 1}`;
            paginationWrapper.innerHTML = '';
            createItems(sliceArrPets(fullPetsList, size)[page]);
            initButtons();
        })

        function resize() {
            window.addEventListener('resize', () => {
                page = 0;
                showPage.innerHTML = `${page + 1}`;
                getSize();
                sliceArrPets(fullPetsList, size);
                initButtons();
                paginationWrapper.innerHTML = '';
                createItems(sliceArrPets(fullPetsList, size)[page]);
            })
        }

        initButtons();
        createItems(sliceArrPets(fullPetsList, size)[page]);
        resize();
    }
    paginit();
}



parseItems();


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