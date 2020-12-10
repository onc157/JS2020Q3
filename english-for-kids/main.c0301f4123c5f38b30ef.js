(()=>{"use strict";var t={339:()=>{function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var s=[],r=!0,o=!1,a=void 0;try{for(var n,i=t[Symbol.iterator]();!(r=(n=i.next()).done)&&(s.push(n.value),!e||s.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return s}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}function a(r,o,a,n){var i,u=null;try{u=document.createElement(r)}catch(t){throw new Error("Unable to create HTMLElement!")}o&&(i=u.classList).add.apply(i,s(o.split(" "))),a&&Array.isArray(a)?a.forEach((function(t){return t&&u.appendChild(t)})):a&&"object"===e(a)?u.appendChild(a):a&&"string"==typeof a&&(u.innerHTML=a),n&&n.appendChild(u);for(var c=arguments.length,l=new Array(c>4?c-4:0),d=4;d<c;d++)l[d-4]=arguments[d];return l.length&&l.forEach((function(e){var s=t(e,2),r=s[0],o=s[1];""===o&&u.setAttribute(r,""),r.match(/disabled/)?u.setAttribute(r,""):r.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|src|style|background|width|height|href|target/)?u.setAttribute(r,o):u.dataset[r]=o})),u}function n(t,e){window.localStorage.setItem(t,JSON.stringify(e))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return JSON.parse(window.localStorage.getItem(t)||e)}function u(t,e){t.forEach((function(t){a("tr","statistics-table__body--row",[a("td","statistics-table__body--row-element","".concat(t.group),e),a("td","statistics-table__body--row-element","".concat(t.word),e),a("td","statistics-table__body--row-element","".concat(t.translate),e),a("td","statistics-table__body--row-element","".concat(t.attempt),e),a("td","statistics-table__body--row-element","".concat(t.right),e),a("td","statistics-table__body--row-element","".concat(t.wrong),e),a("td","statistics-table__body--row-element","".concat(t.percent),e)],e)}))}var c=[{group:"Actions",word:"dance",translate:"танцевать",img:"./assets/img/actions/dance.jpg",sound:"./assets/audio/dance.mp3"},{group:"Actions",word:"dig",translate:"копать",img:"./assets/img/actions/dig.jpg",sound:"./assets/audio/dig.mp3"},{group:"Actions",word:"eat",translate:"есть",img:"./assets/img/actions/eat.jpg",sound:"./assets/audio/eat.mp3"},{group:"Actions",word:"paint",translate:"рисовать",img:"./assets/img/actions/paint.jpg",sound:"./assets/audio/paint.mp3"},{group:"Actions",word:"play",translate:"играть",img:"./assets/img/actions/play.jpg",sound:"./assets/audio/play.mp3"},{group:"Actions",word:"sing",translate:"петь",img:"./assets/img/actions/sing.jpg",sound:"./assets/audio/sing.mp3"},{group:"Actions",word:"study",translate:"учиться",img:"./assets/img/actions/study.jpg",sound:"./assets/audio/study.mp3"},{group:"Actions",word:"wash",translate:"мыть",img:"./assets/img/actions/wash.jpg",sound:"./assets/audio/wash.mp3"},{group:"Animals",word:"camel",translate:"верблюд",img:"./assets/img/animals/camel.jpg",sound:"./assets/audio/camel.mp3"},{group:"Animals",word:"cow",translate:"корова",img:"./assets/img/animals/cow.jpg",sound:"./assets/audio/cow.mp3"},{group:"Animals",word:"dog",translate:"собака",img:"./assets/img/animals/dog.jpg",sound:"./assets/audio/dog.mp3"},{group:"Animals",word:"giraffe",translate:"жираф",img:"./assets/img/animals/giraffe.jpg",sound:"./assets/audio/giraffe.mp3"},{group:"Animals",word:"horse",translate:"лошадь",img:"./assets/img/animals/horse.jpg",sound:"./assets/audio/horse.mp3"},{group:"Animals",word:"lion",translate:"лев",img:"./assets/img/animals/lion.jpg",sound:"./assets/audio/lion.mp3"},{group:"Animals",word:"monkey",translate:"обезьяна",img:"./assets/img/animals/monkey.jpg",sound:"./assets/audio/monkey.mp3"},{group:"Animals",word:"tiger",translate:"тигр",img:"./assets/img/animals/tiger.jpg",sound:"./assets/audio/tiger.mp3"},{group:"Clothes",word:"boot",translate:"ботинок",img:"./assets/img/clothes/boot.jpg",sound:"./assets/audio/boot.mp3"},{group:"Clothes",word:"coat",translate:"пальто",img:"./assets/img/clothes/coat.jpg",sound:"./assets/audio/coat.mp3"},{group:"Clothes",word:"gloves",translate:"перчатки",img:"./assets/img/clothes/gloves.jpg",sound:"./assets/audio/gloves.mp3"},{group:"Clothes",word:"hat",translate:"шапка",img:"./assets/img/clothes/hat.jpg",sound:"./assets/audio/hat.mp3"},{group:"Clothes",word:"pants",translate:"штаны",img:"./assets/img/clothes/pants.jpg",sound:"./assets/audio/pants.mp3"},{group:"Clothes",word:"scarf",translate:"шарф",img:"./assets/img/clothes/scarf.jpg",sound:"./assets/audio/scarf.mp3"},{group:"Clothes",word:"shirt",translate:"рубашка",img:"./assets/img/clothes/shirt.jpg",sound:"./assets/audio/shirt.mp3"},{group:"Clothes",word:"vest",translate:"жилет",img:"./assets/img/clothes/vest.jpg",sound:"./assets/audio/vest.mp3"},{group:"Emotions",word:"anger",translate:"гнев",img:"./assets/img/emotions/anger.jpg",sound:"./assets/audio/anger.mp3"},{group:"Emotions",word:"care",translate:"забота",img:"./assets/img/emotions/care.jpg",sound:"./assets/audio/care.mp3"},{group:"Emotions",word:"confusion",translate:"замешательство",img:"./assets/img/emotions/confusion.jpg",sound:"./assets/audio/confusion.mp3"},{group:"Emotions",word:"friendship",translate:"дружба",img:"./assets/img/emotions/friendship.jpg",sound:"./assets/audio/friendship.mp3"},{group:"Emotions",word:"happiness",translate:"счастье",img:"./assets/img/emotions/happiness.jpg",sound:"./assets/audio/happiness.mp3"},{group:"Emotions",word:"love",translate:"любовь",img:"./assets/img/emotions/love.jpg",sound:"./assets/audio/love.mp3"},{group:"Emotions",word:"resentment",translate:"обида",img:"./assets/img/emotions/resentment.jpg",sound:"./assets/audio/resentment.mp3"},{group:"Emotions",word:"wonder",translate:"удивление",img:"./assets/img/emotions/wonder.jpg",sound:"./assets/audio/wonder.mp3"},{group:"Food",word:"apple",translate:"яблоко",img:"./assets/img/food/apple.jpg",sound:"./assets/audio/apple.mp3"},{group:"Food",word:"cake",translate:"торт",img:"./assets/img/food/cake.jpg",sound:"./assets/audio/cake.mp3"},{group:"Food",word:"cheese",translate:"сыр",img:"./assets/img/food/cheese.jpg",sound:"./assets/audio/cheese.mp3"},{group:"Food",word:"fish",translate:"рыба",img:"./assets/img/food/fish.jpg",sound:"./assets/audio/fish.mp3"},{group:"Food",word:"pear",translate:"груша",img:"./assets/img/food/pear.jpg",sound:"./assets/audio/pear.mp3"},{group:"Food",word:"pizza",translate:"пицца",img:"./assets/img/food/pizza.jpg",sound:"./assets/audio/pizza.mp3"},{group:"Food",word:"pumpkin",translate:"тыква",img:"./assets/img/food/pumpkin.jpg",sound:"./assets/audio/pumpkin.mp3"},{group:"Food",word:"salad",translate:"салат",img:"./assets/img/food/salad.jpg",sound:"./assets/audio/salad.mp3"},{group:"Places",word:"beach",translate:"пляж",img:"./assets/img/places/beach.jpg",sound:"./assets/audio/beach.mp3"},{group:"Places",word:"city",translate:"город",img:"./assets/img/places/city.jpg",sound:"./assets/audio/city.mp3"},{group:"Places",word:"desert",translate:"пустыня",img:"./assets/img/places/desert.jpg",sound:"./assets/audio/desert.mp3"},{group:"Places",word:"field",translate:"поле",img:"./assets/img/places/field.jpg",sound:"./assets/audio/field.mp3"},{group:"Places",word:"forest",translate:"лес",img:"./assets/img/places/forest.jpg",sound:"./assets/audio/forest.mp3"},{group:"Places",word:"mountains",translate:"горы",img:"./assets/img/places/mountains.jpg",sound:"./assets/audio/mountains.mp3"},{group:"Places",word:"river",translate:"река",img:"./assets/img/places/river.jpg",sound:"./assets/audio/river.mp3"},{group:"Places",word:"village",translate:"деревня",img:"./assets/img/places/village.jpg",sound:"./assets/audio/village.mp3"},{group:"Sport",word:"badminton",translate:"бадминтон",img:"./assets/img/sport/badminton.jpg",sound:"./assets/audio/badminton.mp3"},{group:"Sport",word:"baseball",translate:"бейсбол",img:"./assets/img/sport/baseball.jpg",sound:"./assets/audio/baseball.mp3"},{group:"Sport",word:"basketball",translate:"баскетбол",img:"./assets/img/sport/basketball.jpg",sound:"./assets/audio/basketball.mp3"},{group:"Sport",word:"football",translate:"футбол",img:"./assets/img/sport/football.jpg",sound:"./assets/audio/football.mp3"},{group:"Sport",word:"ping-pong",translate:"настольный теннис",img:"./assets/img/sport/ping-pong.jpg",sound:"./assets/audio/ping-pong.mp3"},{group:"Sport",word:"run",translate:"бег",img:"./assets/img/sport/run.jpg",sound:"./assets/audio/run.mp3"},{group:"Sport",word:"tennis",translate:"теннис",img:"./assets/img/sport/tennis.jpg",sound:"./assets/audio/tennis.mp3"},{group:"Sport",word:"volleyball",translate:"волейбол",img:"./assets/img/sport/volleyball.jpg",sound:"./assets/audio/volleyball.mp3"},{group:"Transport",word:"bicycle",translate:"велосипед",img:"./assets/img/transport/bicycle.jpg",sound:"./assets/audio/bicycle.mp3"},{group:"Transport",word:"boat",translate:"лодка",img:"./assets/img/transport/boat.jpg",sound:"./assets/audio/boat.mp3"},{group:"Transport",word:"bus",translate:"автобус",img:"./assets/img/transport/bus.jpg",sound:"./assets/audio/bus.mp3"},{group:"Transport",word:"motorcycle",translate:"мотоцикл",img:"./assets/img/transport/motorcycle.jpg",sound:"./assets/audio/motorcycle.mp3"},{group:"Transport",word:"plane",translate:"самолет",img:"./assets/img/transport/plane.jpg",sound:"./assets/audio/plane.mp3"},{group:"Transport",word:"taxi",translate:"такси",img:"./assets/img/transport/taxi.jpg",sound:"./assets/audio/taxi.mp3"},{group:"Transport",word:"train",translate:"поезд",img:"./assets/img/transport/train.jpg",sound:"./assets/audio/train.mp3"},{group:"Transport",word:"tram",translate:"трамвай",img:"./assets/img/transport/tram.jpg",sound:"./assets/audio/tram.mp3"}],l=[{type:"main",word:"Actions",img:"./assets/img/groups/actions.jpg"},{type:"main",word:"Animals",img:"./assets/img/groups/animals.jpg"},{type:"main",word:"Clothes",img:"./assets/img/groups/clothes.jpg"},{type:"main",word:"Emotions",img:"./assets/img/groups/emotions.jpg"},{type:"main",word:"Food",img:"./assets/img/groups/food.jpg"},{type:"main",word:"Places",img:"./assets/img/groups/places.jpg"},{type:"main",word:"Sport",img:"./assets/img/groups/sport.jpg"},{type:"main",word:"Transport",img:"./assets/img/groups/transport.jpg"}];var d=a("div","field-wrapper section-outer");var g=["Group","Word","Translate","Attempt","Right","Wrong","%"];function p(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e.type||null,this.group=e.group||null,this.word=e.word,this.translate=e.translate||null,this.image=e.img,this.sound=new Audio(e.sound),this.gameType="train"}var e,s,r;return e=t,(s=[{key:"init",value:function(){"main"!==this.type&&this.createElement()}},{key:"createElement",value:function(){var t=this;return this.element=a("div","card",null),this.elementImgFront=a("img",null,null,null,["src","".concat(this.image)],["word","".concat(this.word.toLowerCase())]),this.imgFront=a("div","card-img",this.elementImgFront),this.cardContentFront=a("div","card-content",null),this.cardWordFront=a("div","card-word","".concat(this.word),this.cardContentFront),this.elementImgBack=a("div","card-img",a("img",null,null,null,["src","".concat(this.image)])),this.cardContentBack=a("div","card-content",null),this.cardWordBack=a("div","card-word","".concat(this.translate),this.cardContentBack),this.type?(this.cardFaceFront=a("div","card-face card-face__front",[this.imgFront,this.cardContentFront]),this.elementInner=a("div","card-inner",this.cardFaceFront,this.element)):(this.cardButtonFront=a("button","card-button",'<span class="material-icons">cached</span>',this.cardContentFront),this.cardFaceFront=a("div","card-face card-face__front",[this.imgFront,this.cardContentFront]),this.cardFaceBack=a("div","card-face card-face__back",[this.elementImgBack,this.cardContentBack]),this.elementInner=a("div","card-inner",[this.cardFaceFront,this.cardFaceBack],this.element),this.cardFaceFront.addEventListener("click",(function(){"train"===t.gameType&&(t.sound.play(),(new j).setStorageObj(t.word,"Attempt"))})),this.cardButtonFront.addEventListener("click",(function(e){e.stopPropagation(),(new j).setStorageObj(t.word,"Attempt"),t.elementInner.classList.add("is-flipped"),t.element.addEventListener("mouseleave",(function(){t.elementInner.classList.remove("is-flipped")}))}))),this}},{key:"playMode",value:function(t){this.gameType="".concat(t)}}])&&p(e.prototype,s),r&&p(e,r),t}();function h(){d.classList.toggle("field-wrapper--clear"),console.log("Всё отчищено!"),setTimeout((function(){d.innerHTML="",d.classList.toggle("field-wrapper--clear")}),500)}function f(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var s=[],r=!0,o=!1,a=void 0;try{for(var n,i=t[Symbol.iterator]();!(r=(n=i.next()).done)&&(s.push(n.value),!e||s.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return s}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return w(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}function y(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e,s,r,o,n,i=v(Object.values((e=a("div","mode-switcher",null),s=a("div","button-play","PLAY"),r=a("div","button-train","TRAIN"),o=a("div","button-slider",[r,s,e]),n=a("button","button-burger",'<span class="material-icons">menu</span>'),{headerElement:a("div","header-wrapper section-outer",[n,o]),burgerButton:n,modeSwitcher:e,sliderButton:o,trainButton:r,playButton:s})),3);this.header=i[0],this.burgerButton=i[1],this.modeSwitcher=i[2];var u=v(Object.values(function(){var t=a("nav","burger-list",null),e=[a("li","burger-list__item","Main",t)];l.forEach((function(s){e.push(a("li","burger-list__item",s.word,t))}));var s=a("li","burger-list__item","Statistics",t);e.push(s);var r=a("div","burger-main",t),o=a("div","burger-inner",[r]);return{burgerElement:a("div","burger-wrapper",o),burgerListArr:e,burgerScreen:o,burgerList:t,burgerMain:r}}()),3);this.burger=u[0],this.itemBurger=u[1],this.burgerScreen=u[2];var p,m,h=v(Object.values((p=a("div","footer-rating",null),m=a("button","footer-button","START GAME"),{footerElement:a("div","footer-wrapper section-outer",[m,p]),footerButton:m,footerRating:p})),3);this.footer=h[0],this.footerButton=h[1],this.footerRating=h[2];var b,w,y=v(Object.values((b=a("div","win-content__text","YOU WIN"),w=a("div","win-content",b),{element:a("div","win",w),elementText:b})),2);this.win=y[0],this.winText=y[1];var j=v(Object.values(function(){var t=a("div","lose-content__text","YOU LOSE"),e=a("div","lose-content",t);return{element:a("div","lose",e),elementText:t}}()),2);this.lose=j[0],this.loseText=j[1];var C,k,S,E,A=v(Object.values(function(){var t=a("tbody","statistics-table__body",null),e=a("tr","statistics-table__header",[]);g.forEach((function(t){a("th","statistics-table__header--element","".concat(t),e)}));var s=a("table","statistics-table",[e,t]),r=a("button","button__reset","Reset score"),o=a("button","button__repeat","Repeat words"),n=a("div","statistics-buttons",[o,r]);return{statisticsElement:a("div","statistics-wrapper section-outer",[n,s]),statisticsBody:t,repeatButton:o,resetButton:r,statisticsTitle:e}}()),5);this.statistics=A[0],this.statisticsBody=A[1],this.statisticsRepeatButton=A[2],this.statisticsResetButton=A[3],this.statisticsTitle=A[4],this.field=d,this.description=(C=a("img",null,null,null,["src","./assets/img/rs.svg"]),k=a("a","description-logo",C,null,["href","https://rs.school/js/"],["target","_blanc"]),S=a("div","description-year","2020"),E=a("a","description-github","@onc157",null,["href","https://github.com/onc157"],["target","_blanc"]),a("div","description-wrapper section-outer",[E,S,k])),this.playMode=!1,this.menu=!1,this.sortFlag=!1,this.correctCardCounter=0,this.wrongCardCounter=0,this.statisticsObj=f(c)}var e,s,r;return e=t,(s=[{key:"init",value:function(){var t=this;return document.body.prepend(this.header,this.field,this.description),this.header.prepend(this.burger),this.burgerButton.addEventListener("click",(function(){t.changeBurgerState()})),this.itemBurger.forEach((function(e){e.addEventListener("click",(function(e){var s=e.target.innerHTML;"Main"===s?(h(),setTimeout((function(){t.generateMain()}),500),t.footer.remove()):"Statistics"===s?t.showStatistics():t.generateCurrent(s),t.burgerItemsActive(s),t.changeBurgerState()}))})),this.burger.addEventListener("click",(function(){t.changeBurgerState()})),this.burgerScreen.addEventListener("click",(function(t){return t.stopPropagation()})),this.modeSwitcher.onclick=function(){t.modeSwitcher.classList.toggle("mode-switcher--move"),t.playMode?(t.playMode=!1,t.gameModeOff(),console.log("отключил")):(t.playMode=!0,t.gameMode(),console.log("включил"))},this.statisticsObj.forEach((function(t){t.attempt=0,t.right=0,t.wrong=0,t.percent=0})),i("Statistics")||n("Statistics",this.statisticsObj),this.statisticsResetButton.addEventListener("click",(function(){n("Statistics",t.statisticsObj),t.showStatistics()})),console.log(this.statisticsTitle),this.statisticsTitle.addEventListener("click",(function(e){console.log(e.target.innerHTML),t.statisticsSort(e.target.innerHTML)})),this.statisticsRepeatButton.addEventListener("click",(function(){t.generateDifficult()})),this}},{key:"generateMain",value:function(){var t=this;this.menu=!0,this.burgerItemsActive("Main");var e=[];l.forEach((function(s){var r=new m(s).createElement();e.push(r),r.element.addEventListener("click",(function(){t.generateCurrent(r)})),t.field.prepend(r.element)}))}},{key:"generateCurrent",value:function(t){var e=this;this.menu=!1,h();var s="string"==typeof t?t:t.word,r=[];r=c.filter((function(t){return t.group===s})),this.burgerItemsActive(s),this.currentCards=[],r.forEach((function(t){var s=new m(t).createElement();e.currentCards.push(s),setTimeout((function(){e.field.prepend(s.element)}),500)})),console.log(this.currentCards),this.playMode&&(this.gameModeOff(),this.gameMode())}},{key:"gameMode",value:function(){var t,e,s=this;this.playMode=!0,this.menu||(this.field.after(this.footer),this.currentCards.forEach((function(t){t.playMode("play"),t.cardContentFront.classList.add("card-content--disable"),t.cardFaceFront.classList.add("card-face--game-mode")})),this.shuffleCards=(t=this.currentCards,(e=t.concat()).sort((function(){return Math.random()-.5})),e),this.start=function(){s.startGame(s.shuffleCards)},this.footerButton.addEventListener("click",this.start))}},{key:"startGame",value:function(t){var e=this;console.log("check"),this.footerButton.removeEventListener("click",this.start);var s=t[this.correctCardCounter];this.refreshCurrentCard=function(){s=t[e.correctCardCounter]},this.changeFooterButton("start"),this.playWord(),this.handlerEvent=function(t){t.target.dataset.word===s.word?(s.cardFaceFront.classList.add("card-face--game-mode-right"),e.playAudio("correct"),e.playWord(),e.setStorageObj(s.word,"Right"),e.footerRating.prepend(a("div","star",'<span class="material-icons">star</span>')),t.target.removeEventListener("click",e.handlerEvent),e.correctCardCounter+=1,e.refreshCurrentCard()):(e.playAudio("wrong"),e.setStorageObj(s.word,"Wrong"),e.wrongCardCounter+=1,e.footerRating.prepend(a("div","star",'<span class="material-icons">star_border</span>'))),8===e.correctCardCounter&&(e.wrongCardCounter?(e.playAudio("lose"),document.body.prepend(e.lose),e.loseText.innerHTML="YOU LOSE </br> YOU WRONG ANSWERS: ".concat(e.wrongCardCounter),setTimeout((function(){e.clearGameResult(e.lose)}),5e3)):(e.playAudio("win"),document.body.prepend(e.win),setTimeout((function(){e.clearGameResult(e.win)}),5e3)))},t.forEach((function(t){return t.elementImgFront.addEventListener("click",e.handlerEvent)}))}},{key:"gameModeOff",value:function(){var t=this;this.menu||(this.changeFooterButton("stop"),this.footer.remove(),this.footerRating.innerHTML="",this.currentCards.forEach((function(e){e.playMode("train"),e.cardContentFront.classList.remove("card-content--disable"),e.cardFaceFront.classList.remove("card-face--game-mode-right"),e.cardFaceFront.classList.remove("card-face--game-mode"),e.elementImgFront.removeEventListener("click",t.handlerEvent)})),this.correctCardCounter=0,this.wrongCardCounter=0)}},{key:"showStatistics",value:function(){var t=this;h(),this.footer.remove(),setTimeout((function(){t.field.prepend(t.statistics)}),500),this.statisticsBody.innerHTML="",u(i("Statistics"),this.statisticsBody)}},{key:"playAudio",value:function(t){this.audio=new Audio("./assets/audio/".concat(t,".mp3")),this.audio.play()}},{key:"playWord",value:function(){var t=this;setTimeout((function(){return t.shuffleCards[t.correctCardCounter].sound.play()}),1e3)}},{key:"burgerItemsActive",value:function(t){this.itemBurger.forEach((function(e){e.classList.remove("burger-list__item--active"),e.innerHTML===t&&e.classList.toggle("burger-list__item--active")}))}},{key:"changeFooterButton",value:function(t){var e=this;this.repeatWord=function(){e.playWord()},"start"===t?(this.footerButton.addEventListener("click",this.repeatWord),this.footerButton.classList.add("footer-button--repeater"),this.footerButton.innerHTML='<span class="material-icons">replay</span>'):(this.footerButton.removeEventListener("click",this.repeatWord),this.footerButton.removeEventListener("click",this.start),this.footerButton.classList.remove("footer-button--repeater"),this.footerButton.innerHTML="START GAME")}},{key:"changeBurgerState",value:function(){document.body.classList.toggle("lock-scroll"),this.burger.classList.toggle("burger-wrapper--active"),this.burgerButton.classList.toggle("button-burger--active"),this.burgerScreen.classList.toggle("burger-inner--active")}},{key:"clearGameResult",value:function(t){var e=this;this.gameModeOff(),this.gameMode(),t.remove(),h(),this.footer.remove(),setTimeout((function(){e.generateMain()}),500)}},{key:"setStorageObj",value:function(t,e){var s=i("Statistics");s.forEach((function(s){if(s.word===t){switch(e){case"Attempt":s.attempt+=1;break;case"Right":s.right+=1,s.percent=Math.floor(100*s.right/s.wrong*100)/100;break;case"Wrong":s.wrong+=1,s.percent=Math.floor(100*s.right/s.wrong*100)/100;break;default:console.log("bad action")}0===s.wrong&&s.right>0&&(s.percent=100)}})),console.log(s),n("Statistics",s)}},{key:"statisticsSort",value:function(t){console.log("egegei"),"%"===t&&(t="percent");var e=i("Statistics");this.sortFlag?(this.sortFlag=!1,e.sort((function(e,s){return e[t.toLowerCase()]<s[t.toLowerCase()]?1:-1})),this.statisticsBody.innerHTML="",console.log("ura"),u(e,this.statisticsBody)):(this.sortFlag=!0,e.sort((function(e,s){return e[t.toLowerCase()]>s[t.toLowerCase()]?1:-1})),this.statisticsBody.innerHTML="",console.log(e),u(e,this.statisticsBody))}},{key:"generateDifficult",value:function(){var t=this;this.menu=!1,h();var e=[];(e=i("Statistics").filter((function(t){return 0!==t.wrong}))).sort((function(t,e){return t.wrong<e.wrong?1:-1})),this.currentCards=[],e.forEach((function(e,s){if(!(s>7)){var r=new m(e).createElement();t.currentCards.push(r),setTimeout((function(){t.field.prepend(r.element)}),500)}})),console.log(this.currentCards),this.playMode&&(this.gameModeOff(),this.gameMode())}}])&&y(e.prototype,s),r&&y(e,r),t}();(new j).init().generateMain()}},e={};function s(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,s),o.exports}s.m=t,s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0},e=[[6981,981],[339,981]],r=()=>{};function o(){for(var r,o=0;o<e.length;o++){for(var a=e[o],n=!0,i=1;i<a.length;i++){var u=a[i];0!==t[u]&&(n=!1)}n&&(e.splice(o--,1),r=s(s.s=a[0]))}return 0===e.length&&(s.x(),s.x=()=>{}),r}s.x=()=>{s.x=()=>{},n=n.slice();for(var t=0;t<n.length;t++)a(n[t]);return(r=o)()};var a=o=>{for(var a,n,[u,c,l,d]=o,g=0,p=[];g<u.length;g++)n=u[g],s.o(t,n)&&t[n]&&p.push(t[n][0]),t[n]=0;for(a in c)s.o(c,a)&&(s.m[a]=c[a]);for(l&&l(s),i(o);p.length;)p.shift()();return d&&e.push.apply(e,d),r()},n=self.webpackChunkenglish_for_kids=self.webpackChunkenglish_for_kids||[],i=n.push.bind(n);n.push=a})(),s.x()})();