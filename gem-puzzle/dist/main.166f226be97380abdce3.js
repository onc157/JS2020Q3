!function(Q){function n(n){for(var e,U,s=n[0],i=n[1],l=n[2],r=0,c=[];r<s.length;r++)U=s[r],Object.prototype.hasOwnProperty.call(F,U)&&F[U]&&c.push(F[U][0]),F[U]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(Q[e]=i[e]);for(a&&a(n);c.length;)c.shift()();return B.push.apply(B,l||[]),t()}function t(){for(var Q,n=0;n<B.length;n++){for(var t=B[n],e=!0,s=1;s<t.length;s++){var i=t[s];0!==F[i]&&(e=!1)}e&&(B.splice(n--,1),Q=U(U.s=t[0]))}return Q}var e={},F={0:0},B=[];function U(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return Q[n].call(t.exports,t,t.exports,U),t.l=!0,t.exports}U.m=Q,U.c=e,U.d=function(Q,n,t){U.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:t})},U.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},U.t=function(Q,n){if(1&n&&(Q=U(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var t=Object.create(null);if(U.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var e in Q)U.d(t,e,function(n){return Q[n]}.bind(null,e));return t},U.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return U.d(n,"a",n),n},U.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},U.p="";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var a=i;B.push([121,1]),t()}({121:function(Q,n,t){t(122),Q.exports=t(310)},308:function(module,exports){eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzMDguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///308\n")},309:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGVzdC5zY3NzPzlkNDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMzA5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///309\n")},310:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./babel.js\nvar babel = __webpack_require__(308);\n\n// EXTERNAL MODULE: ./styles/test.scss\nvar test = __webpack_require__(309);\n\n// CONCATENATED MODULE: ./js/utils/create.js\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * @param {String} el\n * @param {String} classNames\n * @param {HTMLElement} child\n * @param {HTMLElement} parent\n * @param {...array} dataAttr\n */\nfunction create(el, classNames, child, parent) {\n  var _element$classList;\n\n  var element = null;\n\n  try {\n    element = document.createElement(el);\n  } catch (error) {\n    throw new Error('Unable to create HTMLElement!');\n  }\n\n  if (classNames) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' ')));\n\n  if (child && Array.isArray(child)) {\n    child.forEach(function (childElement) {\n      return childElement && element.appendChild(childElement);\n    });\n  } else if (child && _typeof(child) === 'object') {\n    element.appendChild(child);\n  } else if (child && typeof child === 'string') {\n    element.innerHTML = child;\n  }\n\n  if (parent) {\n    parent.appendChild(element);\n  }\n\n  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    dataAttr[_key - 4] = arguments[_key];\n  }\n\n  if (dataAttr.length) {\n    dataAttr.forEach(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          attrName = _ref2[0],\n          attrValue = _ref2[1];\n\n      if (attrValue === '') {\n        element.setAttribute(attrName, '');\n      }\n\n      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|src|style/)) {\n        element.setAttribute(attrName, attrValue);\n      } else {\n        element.dataset[attrName] = attrValue;\n      }\n    });\n  }\n\n  return element;\n}\n// CONCATENATED MODULE: ./js/main.js\nfunction main_toConsumableArray(arr) { return main_arrayWithoutHoles(arr) || main_iterableToArray(arr) || main_unsupportedIterableToArray(arr) || main_nonIterableSpread(); }\n\nfunction main_nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }\n\nfunction main_iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction main_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return main_arrayLikeToArray(arr); }\n\nfunction main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Init DOM element\n\nvar main = create('div', 'game-wrapper', [create('div', 'title', 'Gem Puzzles!')]);\nvar counts = create('div', 'counts-wrapper', [create('div', 'count count-time', 'Moves: 0'), create('div', 'count count-move', 'Count time!')]);\nvar buttons = create('div', 'buttons-wrapper', [create('button', 'button new-game', 'New Game'), create('button', 'button save-game', 'Save Game'), create('button', 'button sound', '<span class=\"material-icons\">volume_up</span>'), create('button', 'button score', 'Score')]);\nvar soundWrapper = create('div', 'sound-wrapper', [create('audio', null, null, null, ['src', '../assets/audio/click-cell.wav']), create('audio', null, null, null, ['src', '../assets/audio/click-button.wav'])]);\n\nvar main_Game = /*#__PURE__*/function () {\n  function Game(size) {\n    var _this = this;\n\n    _classCallCheck(this, Game);\n\n    _defineProperty(this, \"handlerEvent\", function (e) {\n      console.log('e.target.className', e.target.className); // BUTTONS HANDLERS\n\n      if (_this.soundOn) {\n        soundWrapper.childNodes[1].currentTime = 0;\n        soundWrapper.childNodes[1].play();\n        console.log('click buttons');\n      }\n\n      if (e.target.className.match(/sound/)) {\n        _this.switchSound(e);\n      }\n\n      if (e.target.className.match(/new-game/)) {\n        _this.newGame();\n      } // if(e.target.className === 'save-game') {}\n      // if(e.target.className === 'score') {}\n\n    });\n\n    _defineProperty(this, \"switchSound\", function (e) {\n      var soundButton = e.target.lastChild;\n\n      if (_this.soundOn) {\n        soundButton.innerHTML = '<span class=\"material-icons\">volume_off</span>';\n        _this.soundOn = false;\n      } else {\n        soundButton.innerHTML = '<span class=\"material-icons\">volume_up</span>';\n        _this.soundOn = true;\n      }\n    });\n\n    _defineProperty(this, \"updateCountTimes\", function () {\n      _this.countTime += 1;\n      var seconds = _this.countTime % 60;\n      var minutes = Math.floor(_this.countTime / 60);\n      counts.lastChild.innerHTML = \"Time: \".concat(minutes, \"m : \").concat(seconds, \"s\");\n      _this.timeOut = setTimeout(_this.updateCountTimes, 1000);\n    });\n\n    this.size = size;\n    this.field = create('div', 'field', null, main);\n    this.buttons = buttons;\n    this.sizeCell = 50;\n    this.soundOn = true;\n    this.countMoves = 0;\n    this.countTime = 0;\n  } // Add element on HTML markup\n\n\n  _createClass(Game, [{\n    key: \"init\",\n    value: function init() {\n      document.body.prepend(main, counts, buttons, soundWrapper);\n      this.buttons.addEventListener('click', this.handlerEvent);\n      return this;\n    }\n  }, {\n    key: \"generateField\",\n    value: function generateField() {\n      var _this2 = this;\n\n      this.cells = []; // Set field sizes\n\n      this.field.style.width = \"\".concat(this.size * this.sizeCell, \"px\");\n      this.field.style.height = \"\".concat(this.size * this.sizeCell, \"px\");\n\n      var randomNumbers = main_toConsumableArray(Array(Math.pow(this.size, 2) - 1).keys()).sort(function () {\n        return Math.random() - 0.5;\n      }); // Generate puzzle cells\n\n\n      var _loop = function _loop(i) {\n        var left = i % _this2.size;\n        var top = (i - left) / _this2.size;\n        _this2.cell = create('div', 'cell', \"\".concat(randomNumbers[i] + 1), _this2.field, ['id', \"\".concat(randomNumbers[i] + 1)], ['style', \"top: \".concat(top * _this2.sizeCell, \"px; left: \").concat(left * _this2.sizeCell, \"px;\")]);\n\n        _this2.cells.push({\n          number: randomNumbers[i] + 1,\n          left: left,\n          top: top,\n          item: _this2.cell,\n          active: false\n        });\n\n        _this2.cell.addEventListener('click', function () {\n          return _this2.cellMove(i);\n        });\n      };\n\n      for (var i = 0; i < Math.pow(this.size, 2) - 1; i++) {\n        _loop(i);\n      }\n\n      this.emptyCell = {\n        number: this.cells.length + 1,\n        left: this.cells.length % this.size,\n        top: (this.cells.length - this.cells.length % this.size) / this.size\n      };\n      this.cells.push(this.emptyCell);\n      this.updateCountTimes();\n    }\n  }, {\n    key: \"cellMove\",\n    value: function cellMove(index) {\n      var cell = this.cells[index];\n      var leftDiff = Math.abs(this.emptyCell.left - cell.left);\n      var topDiff = Math.abs(this.emptyCell.top - cell.top);\n\n      if (this.soundOn) {\n        soundWrapper.childNodes[0].currentTime = 0;\n        soundWrapper.childNodes[0].play();\n      } // We process click of only adjacent cells horizontall or verticall\n\n\n      if (leftDiff + topDiff <= 1) {\n        cell.item.style.left = \"\".concat(this.emptyCell.left * this.sizeCell, \"px\");\n        cell.item.style.top = \"\".concat(this.emptyCell.top * this.sizeCell, \"px\");\n        var _ref = [cell.left, this.emptyCell.left];\n        this.emptyCell.left = _ref[0];\n        cell.left = _ref[1];\n        var _ref2 = [cell.top, this.emptyCell.top];\n        this.emptyCell.top = _ref2[0];\n        cell.top = _ref2[1];\n      } else return; // Check is finish\n\n\n      this.updateCountMove();\n      this.checkFinish();\n    }\n  }, {\n    key: \"checkFinish\",\n    value: function checkFinish() {\n      var _this3 = this;\n\n      // Add or remove --active class for cell on correct position\n      this.cells.forEach(function (elem) {\n        if (elem.item) {\n          if (elem.number - 1 === elem.top * _this3.size + elem.left) {\n            elem.item.classList.add(\"cell--active\");\n            elem.active = true;\n          } else if (elem.number - 1 !== elem.top * _this3.size + elem.left && elem.active === true) {\n            elem.item.classList.remove(\"cell--active\");\n          }\n        }\n      }); // Check all cells on correct position\n\n      var isFinished = this.cells.every(function (cell) {\n        return cell.number - 1 === cell.top * _this3.size + cell.left;\n      });\n\n      if (isFinished) {\n        setTimeout(\"alert('You win!')\", 300);\n      }\n    } // Start New Game without reload page\n\n  }, {\n    key: \"newGame\",\n    value: function newGame() {\n      console.log('new game!');\n      this.field.remove();\n      this.field = create('div', 'field', null, main);\n      clearTimeout(this.timeOut);\n      this.generateField();\n      this.countTime = 0;\n    }\n  }, {\n    key: \"updateCountMove\",\n    value: function updateCountMove() {\n      this.countMoves += 1;\n      counts.firstChild.innerHTML = \"Moves: \".concat(this.countMoves);\n      console.log(this.countMoves);\n    }\n  }]);\n\n  return Game;\n}();\n\n\n// CONCATENATED MODULE: ./index.js\n// import Logo from './assets/logo'\n\n\n\n\n\nnew main_Game(4).init().generateField();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy91dGlscy9jcmVhdGUuanM/MTY1NyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzP2UzYjEiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/NDFmNSJdLCJuYW1lcyI6WyJjcmVhdGUiLCJlbCIsImNsYXNzTmFtZXMiLCJjaGlsZCIsInBhcmVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsIkVycm9yIiwiY2xhc3NMaXN0IiwiYWRkIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJkYXRhQXR0ciIsImxlbmd0aCIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwic2V0QXR0cmlidXRlIiwibWF0Y2giLCJkYXRhc2V0IiwibWFpbiIsImNvdW50cyIsImJ1dHRvbnMiLCJzb3VuZFdyYXBwZXIiLCJHYW1lIiwic2l6ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic291bmRPbiIsImNoaWxkTm9kZXMiLCJjdXJyZW50VGltZSIsInBsYXkiLCJzd2l0Y2hTb3VuZCIsIm5ld0dhbWUiLCJzb3VuZEJ1dHRvbiIsImxhc3RDaGlsZCIsImNvdW50VGltZSIsInNlY29uZHMiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwidGltZU91dCIsInNldFRpbWVvdXQiLCJ1cGRhdGVDb3VudFRpbWVzIiwiZmllbGQiLCJzaXplQ2VsbCIsImNvdW50TW92ZXMiLCJib2R5IiwicHJlcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRXZlbnQiLCJjZWxscyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJyYW5kb21OdW1iZXJzIiwia2V5cyIsInNvcnQiLCJyYW5kb20iLCJpIiwibGVmdCIsInRvcCIsImNlbGwiLCJwdXNoIiwibnVtYmVyIiwiaXRlbSIsImFjdGl2ZSIsImNlbGxNb3ZlIiwiZW1wdHlDZWxsIiwiaW5kZXgiLCJsZWZ0RGlmZiIsImFicyIsInRvcERpZmYiLCJ1cGRhdGVDb3VudE1vdmUiLCJjaGVja0ZpbmlzaCIsImVsZW0iLCJyZW1vdmUiLCJpc0ZpbmlzaGVkIiwiZXZlcnkiLCJjbGVhclRpbWVvdXQiLCJnZW5lcmF0ZUZpZWxkIiwiZmlyc3RDaGlsZCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFvQkMsVUFBcEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUE0RDtBQUFBOztBQUN6RSxNQUFJQyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxNQUFJO0FBQ0ZBLFdBQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCTixFQUF2QixDQUFWO0FBQ0QsR0FGRCxDQUVFLE9BQU9PLEtBQVAsRUFBYztBQUNkLFVBQU0sSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBQU47QUFDRDs7QUFFRCxNQUFJUCxVQUFKLEVBQWdCLHNCQUFBRyxPQUFPLENBQUNLLFNBQVIsRUFBa0JDLEdBQWxCLDhDQUF5QlQsVUFBVSxDQUFDVSxLQUFYLENBQWlCLEdBQWpCLENBQXpCOztBQUVoQixNQUFJVCxLQUFLLElBQUlVLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxLQUFkLENBQWIsRUFBbUM7QUFDakNBLFNBQUssQ0FBQ1ksT0FBTixDQUFjLFVBQUNDLFlBQUQ7QUFBQSxhQUFrQkEsWUFBWSxJQUFJWCxPQUFPLENBQUNZLFdBQVIsQ0FBb0JELFlBQXBCLENBQWxDO0FBQUEsS0FBZDtBQUNELEdBRkQsTUFFTyxJQUFJYixLQUFLLElBQUksUUFBT0EsS0FBUCxNQUFpQixRQUE5QixFQUF3QztBQUM3Q0UsV0FBTyxDQUFDWSxXQUFSLENBQW9CZCxLQUFwQjtBQUNELEdBRk0sTUFFQSxJQUFJQSxLQUFLLElBQUksT0FBT0EsS0FBUCxL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LE9BRmtCLENBQW5COztBQUlBLFVBQUlpQixVQUFKLEVBQWdCO0FBQ2RuQyxrQkFBVSxDQUFDLG1CQUFELEVBQXNCLEdBQXRCLENBQVY7QUFDRDtBQUNGLEssQ0FFRDs7Ozs4QkFDVTtBQUNSbEIsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFdBQUttQixLQUFMLENBQVdnQyxNQUFYO0FBQ0EsV0FBS2hDLEtBQUwsR0FBYXJELE1BQU0sQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixJQUFqQixFQUF1QjBCLElBQXZCLENBQW5CO0FBQ0E4RCxrQkFBWSxDQUFDLEtBQUt0QyxPQUFOLENBQVo7QUFDQSxXQUFLdUMsYUFBTDtBQUNBLFdBQUs1QyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7OztzQ0FjaUI7QUFDaEIsV0FBS1UsVUFBTCxJQUFtQixDQUFuQjtBQUNBNUIsWUFBTSxDQUFDK0QsVUFBUCxDQUFrQnhFLFNBQWxCLG9CQUF3QyxLQUFLcUMsVUFBN0M7QUFDQXRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtxQixVQUFqQjtBQUNEOzs7Ozs7OztBQzVLSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJekIsU0FBSixDQUFTLENBQVQsRUFBWTZELElBQVosR0FBbUJGLGFBQW5CIiwiZmlsZSI6IjMxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2hpbGRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHsuLi5hcnJheX0gZGF0YUF0dHJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGUoZWwsIGNsYXNzTmFtZXMsIGNoaWxkLCBwYXJlbnQsIC4uLmRhdGFBdHRyKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY3JlYXRlIEhUTUxFbGVtZW50IScpO1xuICB9XG5cbiAgaWYgKGNsYXNzTmFtZXMpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzLnNwbGl0KCcgJykpO1xuXG4gIGlmIChjaGlsZCAmJiBBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgIGNoaWxkLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50ICYmIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRFbGVtZW50KSk7XG4gIH0gZWxzZSBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0Jykge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9IGVsc2UgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChkYXRhQXR0ci5sZW5ndGgpIHtcbiAgICBkYXRhQXR0ci5mb3JFYWNoKChbIGF0dHJOYW1lLCBhdHRyVmFsdWUgXSkgPT4ge1xuICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyTmFtZS5tYXRjaCgvdmFsdWV8aWR8cGxhY2Vob2xkZXJ8Y29sc3xyb3dzfGF1dG9jb3JyZWN0fHNwZWxsY2hlY2t8c3JjfHN0eWxlLykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmRhdGFzZXRbYXR0ck5hbWVdID0gYXR0clZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufSIsImltcG9ydCBjcmVhdGUgZnJvbSAnLi91dGlscy9jcmVhdGUnO1xuXG4vLyBJbml0IERPTSBlbGVtZW50XG5jb25zdCBtYWluID0gY3JlYXRlKCdkaXYnLCAnZ2FtZS13cmFwcGVyJyxcbiAgW2NyZWF0ZSgnZGl2JywgJ3RpdGxlJywgJ0dlbSBQdXp6bGVzIScpXSk7XG5jb25zdCBjb3VudHMgPSAgY3JlYXRlKCdkaXYnLCAnY291bnRzLXdyYXBwZXInLCBbXG4gIGNyZWF0ZSgnZGl2JywgJ2NvdW50IGNvdW50LXRpbWUnLCAnTW92ZXM6IDAnKSxcbiAgY3JlYXRlKCdkaXYnLCAnY291bnQgY291bnQtbW92ZScsICdDb3VudCB0aW1lIScpXG5dKTtcbmNvbnN0IGJ1dHRvbnMgPSBjcmVhdGUoJ2RpdicsICdidXR0b25zLXdyYXBwZXInLCBbXG4gIGNyZWF0ZSgnYnV0dG9uJywgJ2J1dHRvbiBuZXctZ2FtZScsICdOZXcgR2FtZScpLFxuICBjcmVhdGUoJ2J1dHRvbicsICdidXR0b24gc2F2ZS1nYW1lJywgJ1NhdmUgR2FtZScpLFxuICBjcmVhdGUoJ2J1dHRvbicsICdidXR0b24gc291bmQnLCAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnZvbHVtZV91cDwvc3Bhbj4nKSxcbiAgY3JlYXRlKCdidXR0b24nLCAnYnV0dG9uIHNjb3JlJywgJ1Njb3JlJylcbl0pO1xuY29uc3Qgc291bmRXcmFwcGVyID0gY3JlYXRlKCdkaXYnLCAnc291bmQtd3JhcHBlcicsIFtcbiAgY3JlYXRlKCdhdWRpbycsIG51bGwsIG51bGwsIG51bGwsIFsnc3JjJywgJy4uL2Fzc2V0cy9hdWRpby9jbGljay1jZWxsLndhdiddKSxcbiAgY3JlYXRlKCdhdWRpbycsIG51bGwsIG51bGwsIG51bGwsIFsnc3JjJywgJy4uL2Fzc2V0cy9hdWRpby9jbGljay1idXR0b24ud2F2J10pXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZmllbGQgPSBjcmVhdGUoJ2RpdicsICdmaWVsZCcsIG51bGwsIG1haW4pO1xuICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgdGhpcy5zaXplQ2VsbCA9IDUwO1xuICAgIHRoaXMuc291bmRPbiA9IHRydWU7XG4gICAgdGhpcy5jb3VudE1vdmVzID0gMDtcbiAgICB0aGlzLmNvdW50VGltZSA9IDA7XG4gIH1cblxuICAvLyBBZGQgZWxlbWVudCBvbiBIVE1MIG1hcmt1cFxuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChtYWluLCBjb3VudHMsIGJ1dHRvbnMsIHNvdW5kV3JhcHBlcik7XG4gICAgdGhpcy5idXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVyRXZlbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICB0aGlzLmNlbGxzID0gW107XG5cbiAgICAvLyBTZXQgZmllbGQgc2l6ZXNcbiAgICB0aGlzLmZpZWxkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaXplICogdGhpcy5zaXplQ2VsbH1weGA7XG4gICAgdGhpcy5maWVsZC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemUgKiB0aGlzLnNpemVDZWxsfXB4YDtcblxuICAgIGNvbnN0IHJhbmRvbU51bWJlcnMgPSBbLi4uQXJyYXkodGhpcy5zaXplICoqIDIgLSAxKS5rZXlzKCldXG4gICAgICAuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICAgIC8vIEdlbmVyYXRlIHB1enpsZSBjZWxsc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplICoqIDIgLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBpICUgdGhpcy5zaXplO1xuICAgICAgY29uc3QgdG9wID0gKGkgLSBsZWZ0KSAvIHRoaXMuc2l6ZTtcblxuICAgICAgdGhpcy5jZWxsID0gY3JlYXRlKCdkaXYnLCAnY2VsbCcsIGAke3JhbmRvbU51bWJlcnNbaV0gKyAxfWAsIHRoaXMuZmllbGQsIFsnaWQnLCBgJHtyYW5kb21OdW1iZXJzW2ldICsgMX1gXSxcbiAgICAgIFsnc3R5bGUnLCBgdG9wOiAke3RvcCAqIHRoaXMuc2l6ZUNlbGx9cHg7IGxlZnQ6ICR7bGVmdCAqIHRoaXMuc2l6ZUNlbGx9cHg7YF1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY2VsbHMucHVzaCh7XG4gICAgICAgIG51bWJlcjogcmFuZG9tTnVtYmVyc1tpXSArIDEsXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBpdGVtOiB0aGlzLmNlbGwsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNlbGxNb3ZlKGkpKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtcHR5Q2VsbCA9IHtcbiAgICAgIG51bWJlcjogdGhpcy5jZWxscy5sZW5ndGggKyAxLFxuICAgICAgbGVmdDogdGhpcy5jZWxscy5sZW5ndGggJSB0aGlzLnNpemUsXG4gICAgICB0b3A6ICh0aGlzLmNlbGxzLmxlbmd0aCAtICh0aGlzLmNlbGxzLmxlbmd0aCAlIHRoaXMuc2l6ZSkpIC8gdGhpcy5zaXplXG4gICAgfTtcblxuICAgIHRoaXMuY2VsbHMucHVzaCh0aGlzLmVtcHR5Q2VsbCk7XG4gICAgdGhpcy51cGRhdGVDb3VudFRpbWVzKCk7XG4gIH1cblxuICBoYW5kbGVyRXZlbnQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlLnRhcmdldC5jbGFzc05hbWUnLCBlLnRhcmdldC5jbGFzc05hbWUpXG4gICAgLy8gQlVUVE9OUyBIQU5ETEVSU1xuXG4gICAgaWYgKHRoaXMuc291bmRPbikge1xuICAgICAgc291bmRXcmFwcGVyLmNoaWxkTm9kZXNbMV0uY3VycmVudFRpbWUgPSAwO1xuICAgICAgc291bmRXcmFwcGVyLmNoaWxkTm9kZXNbMV0ucGxheSgpO1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGJ1dHRvbnMnKVxuICAgIH1cblxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvc291bmQvKSkge1xuICAgICAgdGhpcy5zd2l0Y2hTb3VuZChlKTtcbiAgICB9XG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9uZXctZ2FtZS8pKSB7XG4gICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICB9XG4gICAgLy8gaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnc2F2ZS1nYW1lJykge31cbiAgICAvLyBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzY29yZScpIHt9XG5cbiAgfVxuXG4gIGNlbGxNb3ZlKGluZGV4KSB7XG4gICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbHNbaW5kZXhdO1xuICAgIGNvbnN0IGxlZnREaWZmID0gTWF0aC5hYnModGhpcy5lbXB0eUNlbGwubGVmdCAtIGNlbGwubGVmdCk7XG4gICAgY29uc3QgdG9wRGlmZiA9IE1hdGguYWJzKHRoaXMuZW1wdHlDZWxsLnRvcCAtIGNlbGwudG9wKTtcblxuICAgIGlmICh0aGlzLnNvdW5kT24pIHtcbiAgICAgIHNvdW5kV3JhcHBlci5jaGlsZE5vZGVzWzBdLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIHNvdW5kV3JhcHBlci5jaGlsZE5vZGVzWzBdLnBsYXkoKTtcbiAgICB9XG5cbiAgICAvLyBXZSBwcm9jZXNzIGNsaWNrIG9mIG9ubHkgYWRqYWNlbnQgY2VsbHMgaG9yaXpvbnRhbGwgb3IgdmVydGljYWxsXG4gICAgaWYgKGxlZnREaWZmICsgdG9wRGlmZiA8PSAxKSB7XG4gICAgICBjZWxsLml0ZW0uc3R5bGUubGVmdCA9IGAke3RoaXMuZW1wdHlDZWxsLmxlZnQgKiB0aGlzLnNpemVDZWxsfXB4YDtcbiAgICAgIGNlbGwuaXRlbS5zdHlsZS50b3AgPSBgJHt0aGlzLmVtcHR5Q2VsbC50b3AgKiB0aGlzLnNpemVDZWxsfXB4YDtcblxuICAgICAgW3RoaXMuZW1wdHlDZWxsLmxlZnQsIGNlbGwubGVmdF0gPSBbY2VsbC5sZWZ0LCB0aGlzLmVtcHR5Q2VsbC5sZWZ0XTtcbiAgICAgIFt0aGlzLmVtcHR5Q2VsbC50b3AsIGNlbGwudG9wXSA9IFtjZWxsLnRvcCwgdGhpcy5lbXB0eUNlbGwudG9wXTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgaXMgZmluaXNoXG4gICAgdGhpcy51cGRhdGVDb3VudE1vdmUoKTtcbiAgICB0aGlzLmNoZWNrRmluaXNoKCk7XG4gIH1cblxuICBjaGVja0ZpbmlzaCgpIHtcbiAgICAvLyBBZGQgb3IgcmVtb3ZlIC0tYWN0aXZlIGNsYXNzIGZvciBjZWxsIG9uIGNvcnJlY3QgcG9zaXRpb25cbiAgICB0aGlzLmNlbGxzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoZWxlbS5pdGVtKSB7XG4gICAgICAgIGlmIChlbGVtLm51bWJlciAtIDEgPT09IGVsZW0udG9wICogdGhpcy5zaXplICsgZWxlbS5sZWZ0KSB7XG4gICAgICAgICAgZWxlbS5pdGVtLmNsYXNzTGlzdC5hZGQoXCJjZWxsLS1hY3RpdmVcIik7XG4gICAgICAgICAgZWxlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW0ubnVtYmVyIC0gMSAhPT0gZWxlbS50b3AgKiB0aGlzLnNpemUgKyBlbGVtLmxlZnQgJiYgZWxlbS5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICBlbGVtLml0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBDaGVjayBhbGwgY2VsbHMgb24gY29ycmVjdCBwb3NpdGlvblxuICAgIGNvbnN0IGlzRmluaXNoZWQgPSB0aGlzLmNlbGxzLmV2ZXJ5KGNlbGwgPT4ge1xuICAgICAgcmV0dXJuIGNlbGwubnVtYmVyIC0gMSA9PT0gY2VsbC50b3AgKiB0aGlzLnNpemUgKyBjZWxsLmxlZnQ7XG4gICAgfSlcblxuICAgIGlmIChpc0ZpbmlzaGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KFwiYWxlcnQoJ1lvdSB3aW4hJylcIiwgMzAwKTtcbiAgICB9XG4gIH1cblxuICAvLyBTdGFydCBOZXcgR2FtZSB3aXRob3V0IHJlbG9hZCBwYWdlXG4gIG5ld0dhbWUoKSB7XG4gICAgY29uc29sZS5sb2coJ25ldyBnYW1lIScpO1xuICAgIHRoaXMuZmllbGQucmVtb3ZlKCk7XG4gICAgdGhpcy5maWVsZCA9IGNyZWF0ZSgnZGl2JywgJ2ZpZWxkJywgbnVsbCwgbWFpbik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dCk7XG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XG4gICAgdGhpcy5jb3VudFRpbWUgPSAwO1xuICB9XG5cbiAgc3dpdGNoU291bmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNvdW5kQnV0dG9uID0gIGUudGFyZ2V0Lmxhc3RDaGlsZDtcblxuICAgIGlmICh0aGlzLnNvdW5kT24pIHtcbiAgICAgIHNvdW5kQnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dm9sdW1lX29mZjwvc3Bhbj4nO1xuICAgICAgdGhpcy5zb3VuZE9uID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdW5kQnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dm9sdW1lX3VwPC9zcGFuPic7XG4gICAgICB0aGlzLnNvdW5kT24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvdW50TW92ZSgpIHtcbiAgICB0aGlzLmNvdW50TW92ZXMgKz0gMTtcbiAgICBjb3VudHMuZmlyc3RDaGlsZC5pbm5lckhUTUwgPSBgTW92ZXM6ICR7dGhpcy5jb3VudE1vdmVzfWA7XG4gICAgY29uc29sZS5sb2codGhpcy5jb3VudE1vdmVzKTtcbiAgfVxuXG4gIHVwZGF0ZUNvdW50VGltZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5jb3VudFRpbWUgKz0gMTtcbiAgICBsZXQgc2Vjb25kcyA9IHRoaXMuY291bnRUaW1lICUgNjA7XG4gICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCB0aGlzLmNvdW50VGltZSAvIDYwKTtcblxuICAgIGNvdW50cy5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gYFRpbWU6ICR7bWludXRlc31tIDogJHtzZWNvbmRzfXNgO1xuXG4gICAgdGhpcy50aW1lT3V0ID0gc2V0VGltZW91dCh0aGlzLnVwZGF0ZUNvdW50VGltZXMsIDEwMDApO1xuICB9XG59XG5cbiIsIi8vIGltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28nXG5pbXBvcnQgJy4vYmFiZWwnXG5pbXBvcnQgJy4vc3R5bGVzL3Rlc3Quc2NzcydcbmltcG9ydCAnLi9qcy91dGlscy9jcmVhdGUnXG5pbXBvcnQgJy4vanMvbWFpbidcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvbWFpbidcblxubmV3IEdhbWUoNCkuaW5pdCgpLmdlbmVyYXRlRmllbGQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///310\n")}});