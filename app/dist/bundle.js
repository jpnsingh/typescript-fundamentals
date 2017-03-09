(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
console.log(greet_1.sayHello('TypeScript'));
function showHello(divName, name) {
    var el = document.getElementById(divName);
    el.innerText = greet_1.sayHello(name);
}
showHello('greeting', 'TypeScript');

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsTUFBTSxDQUFDLGdCQUFjLElBQU0sQ0FBQztBQUNoQyxDQUFDO0FBRkQsNEJBRUM7Ozs7O0FDRkQsaUNBQWlDO0FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBRXBDLG1CQUFtQixPQUFlLEVBQUUsSUFBWTtJQUM1QyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBIZWxsbyBmcm9tICR7bmFtZX1gO1xufVxuIiwiaW1wb3J0IHtzYXlIZWxsb30gZnJvbSAnLi9ncmVldCc7XG5cbmNvbnNvbGUubG9nKHNheUhlbGxvKCdUeXBlU2NyaXB0JykpO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xuICAgIGVsLmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xufVxuXG5zaG93SGVsbG8oJ2dyZWV0aW5nJywgJ1R5cGVTY3JpcHQnKTtcbiJdfQ==
