// DOM Elements
const fullDate = document.getElementById('fullDate');
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const nameDisplay = document.getElementById('name-value');
const focus = document.getElementById('focus');
const focusDisplay = document.getElementById('focus-value');
const buttonBg = document.getElementById('button-refresh-background');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const buttonQuote = document.getElementById('button-refresh-quote');
const city = document.getElementById('city');
const cityValue = document.getElementById('city-value');
const cityDisplay = document.getElementById('weather-display-wrapper');
const weatherIcon  = document.querySelector('.weather__icon');
const temperature = document.getElementById('weather__temperature');
const airHumidity = document.getElementById('air-humidity__value');
const wind = document.getElementById('wind__value');

// Options
const showAmPm = false;

// Show Time
const showTime = () => {
    let today = new Date();
    const arrayDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = arrayDaysOfWeek[today.getDay()];
    let date = today.getDate();
    let month = arrayMonths[today.getMonth()];
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    console.log(amPm);

    // 12hr Format
    // hour = hour % 12 || 12;

    // Output Date
    fullDate.innerHTML = `${day}<span>, </span>${date} ${month}`;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Create random array for background
let arr = [];
const getRandomBgArray = () => {

    for (let i = 1; i <= 24; i++) {
        arr.push(i + '.jpg');
    }

    // console.log('This is random arr', arr)
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // console.log('This is random arr', arr)
}

// Set background and Greeting
const initBgGreat = () => {
    let today = new Date();
    let hour = today.getHours();

    //  Change BG on click
    buttonBg.addEventListener('click', () => {
        buttonBg.disabled = true;
        hour = hour + 1;
        completeBgGreat();
        setTimeout(function() { buttonBg.disabled = false }, 1000);
    })

    const completeBgGreat = () => {
        const body = document.querySelector('body');
        let img = document.createElement('img');
        if (hour >= 24) {
            hour = 0;
        }
        if (hour < 6) {
            // Night
            img.src = `assets/images/night/${arr[hour]}`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            }
            greeting.textContent = 'Good Night';
        } else if (hour < 12) {
            //Morning
            img.src = `assets/images/morning/${arr[hour]}`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            }
            greeting.textContent = 'Good Morning';
        } else if (hour < 18) {
            // Day
            img.src = `assets/images/day/${arr[hour]}`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            }
            greeting.textContent = 'Good Day';
        } else {
            // Evening
            img.src = `assets/images/evening/${arr[hour]}`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            }
            greeting.textContent = 'Good Evening';
        }
    }
    completeBgGreat();
}

// Create random number for getQuote
const getRandomNumber = () => {
    let randomNumber = 2 + Math.random() * (100 + 1 - 2);
    return Math.floor(randomNumber);
}

// Get Quote and Show
const getQuote = async () => {
    const url = 'https://type.fit/api/quotes';
    const src = await fetch(url);
    const data = await src.json();
    quoteBox.classList.remove('displayOff');
    quoteBox.classList.add('displayOn');
    quote.textContent = data[getRandomNumber()].text;
    author.textContent = data[getRandomNumber()].author;
}

// Show City Input
const showCityInput = () => {
    city.style.display = 'block';
    cityDisplay.style.display = 'none';
}

// Show City Display
const showCityDisplay = () => {
    city.style.display = 'none';
    cityDisplay.style.display = 'flex';
}

// Get Wheater
const getWeather = async () => {
    if (localStorage.getItem('city') === null) {
        showCityInput();
        console.log('local pustoi, skrql display');
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&lang=en&appid=ec5896d708a7c66fd0614bd0376a488f&units=metric`;
        const src = await fetch(url);
        const data = await src.json();

        weatherIcon.className = 'weather__icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.innerText = `${Math.round(data.main.temp)}°C`;
        airHumidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed} m/s`;
        console.log(data);
        console.log(data.main.humidity, data.wind.speed, data.main.temp);
    } catch (e) {
        showCityInput();
        city.placeholder = 'Error City!'
        console.log('otobrazil oshibku');
        return;
    }

    if (localStorage.getItem('city') !== null) {
        city.value = localStorage.getItem('city');
        showCityDisplay();
        cityValue.innerText = localStorage.getItem('city');
        console.log('local ne pustoi, otobrazil display');
    }

    cityValue.addEventListener('click', () => {
        showCityInput();
        city.focus();
        city.value = '';
    })

}

// Set City
const setCity = (e) => {
    if (e.type === 'keypress') {
        if ((e.which == 13 || e.keyCode == 13) && (e.target.value !== '')) {
            showCityDisplay();
            cityValue.innerHTML = e.target.value;
            localStorage.setItem('city', e.target.value)
            city.blur();
            getWeather();
            console.log('setCity, first if');
        } else if ((e.which == 13 || e.keyCode == 13) && (e.target.value === '')) {
            showCityDisplay();
            getWeather();
            console.log('setCity, otmena Enter');
        }

    } else if (e.target.value !== '') {
        showCityDisplay();
        cityValue.innerHTML = e.target.value;
        localStorage.setItem('city', e.target.value);
        console.log('setCity, second if');
    } else if ((e.type === 'blur') && (city.value === '') && (localStorage.city === undefined)) {
        showCityInput();
        console.log('setCity, third if');
    } else {
        showCityDisplay();
        console.log('setCity, else');
    }
}

city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

// Show Name Input
const showNameInput = () => {
    name.style.display = 'block';
    nameDisplay.style.display = 'none';
}

// Show Name Display
const showNameDisplay = () => {
    name.style.display = 'none';
    nameDisplay.style.display = 'block';
}

// Show Focus Input
const showFocusInput = () => {
    focus.style.display = 'block';
    focusDisplay.style.display = 'none';
}

// Show Focus Display
const showFocusDisplay = () => {
    focus.style.display = 'none';
    focusDisplay.style.display = 'block';
}

// Get Name
const getName = () => {
    if (localStorage.getItem('name') !== null) {
        name.value = localStorage.getItem('name');
        showNameDisplay();
        nameDisplay.innerText = localStorage.getItem('name');
        console.log('Get name first if');
        console.log(/^\s+$/.test(localStorage.getItem('name')));
    }
    // if (/^\s+$/.test(localStorage.getItem('name'))) {
    //     showNameInput();
    //     name.focus();
    //     name.value = 'Ты шо дурной?';
    //     console.log('Ты шо дурной?');
    // }

    nameDisplay.addEventListener('click', () => {
        showNameInput();
        name.focus();
        name.value = '';
    })
}

// Set Name
const setName = (e) => {

    // if (/^\s+$/.test(localStorage.getItem('name'))) {
    //     showNameInput();
    //     name.focus();
    //     name.value = 'Ты шо дурной?';
    //     console.log('Ты шо дурной?');
    // }

    if (e.type === 'keypress') {
        if ((e.which == 13 || e.keyCode == 13) && (e.target.value !== '')) {
            showNameDisplay();
            nameDisplay.innerHTML = e.target.value;
            localStorage.setItem('name', e.target.value)
            name.blur();
        }

    } else if (e.target.value !== '') {
        showNameDisplay();
        nameDisplay.innerHTML = e.target.value;
        localStorage.setItem('name', e.target.value)
    } else if ((e.type === 'blur') && (name.value === '') && (localStorage.name === undefined)) {
        showNameInput();
    } else {
        showNameDisplay();
    }
}

// Get Focus
const getFocus = () => {
    if (localStorage.getItem('focus') !== null) {
        focus.value = localStorage.getItem('focus');
        showFocusDisplay();
        focusDisplay.innerText = localStorage.getItem('focus');
    }

    focusDisplay.addEventListener('click', () => {
        showFocusInput();
        focus.focus();
        focus.value = '';
    })
}

// Set Focus
const setFocus = (e) => {
    if (e.type === 'keypress') {
        if ((e.which == 13 || e.keyCode == 13) && (e.target.value !== '')) {
            showFocusDisplay();
            focusDisplay.innerHTML = e.target.value;
            localStorage.setItem('focus', e.target.value)
            focus.blur();
        }

    } else if (e.target.value !== '') {
        showFocusDisplay();
        focusDisplay.innerHTML = e.target.value;
        localStorage.setItem('focus', e.target.value)
    } else if ((e.type === 'blur') && (focus.value === '') && (localStorage.focus === undefined)) {
        showFocusInput();
    } else {
        showFocusDisplay();
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
getRandomBgArray();
showTime();
getQuote();
buttonQuote.addEventListener('click', getQuote);
initBgGreat();
getName();
getFocus();
getWeather();