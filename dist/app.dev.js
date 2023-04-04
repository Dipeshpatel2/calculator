"use strict";

// variables created and assigned to classes made in HTML. classes found in brackets.
//querySelector for single class and querySelectorAll for multiple elements of the same class  
// setting them as const numbers for eg-makes all the buttons attached to .number class into an array
var screen = document.querySelector(".screen");
var topScreen = document.querySelector(".top-screen");
var allClear = document.querySelector(".clear");
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var deletes = document.querySelector(".delete");
var equal = document.querySelector(".equals"); //when the buttons are pressed, declaring them as variables temporary stores them

var firstNumber = "";
var operator = "";
var secondNumber = "";
var addDecimal = false;
var result; // creating this function means that everytime a button is pressed it will show in the console

var handleNumberClick = function handleNumberClick(event) {
  if (screen.innerText == "+") {
    topScreen.innerText += " + ";
    screen.innerText = "";
  } else if (screen.innerText == "-") {
    topScreen.innerText += " - ";
    screen.innerText = "";
  } else if (screen.innerText == "/") {
    topScreen.innerText += " / ";
    screen.innerText = "";
  } else if (screen.innerText == "*") {
    topScreen.innerText += " * ";
    screen.innerText = "";
  } else if (screen.innerText === '.' && !addDecimal) {
    addDecimal = true;
  } else if (screen.innerText === '.' && addDecimal) {
    return;
  } //originally below was const innerText = parseInt(event.target.innerText)


  var innerText = event.target.innerText; //screen.innerText = screen.innerText+innerText

  screen.innerText += innerText;
};

var handleOperatorClick = function handleOperatorClick(event) {
  var innerText = event.target.innerText;
  operator = innerText;
  firstNumber = screen.innerText;
  console.log(firstNumber);
  topScreen.innerText = firstNumber;
  screen.innerText = operator;
};

var handleClearClick = function handleClearClick() {
  screen.innerText = "";
  topScreen.innerText = "";
};

var handleDelete = function handleDelete() {};

var handleEqual = function handleEqual(firstNumber, operator, secondNumber) {
  secondNumber = screen.innerText;

  if (operator == '+') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator == '-') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (operator == '*') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }

  screen.innerText = result;
}; //
//loop over numbers array
// inside the variable numbers, the forEach goes through the number array accesing each number button in the array
//adding an eventListener will allow each button when pressed to show the event object where we can access the number


numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberClick);
});
operators.forEach(function (operator) {
  operator.addEventListener("click", handleOperatorClick);
});
allClear.addEventListener("click", handleClearClick);
equal.addEventListener("click", function () {
  handleEqual(firstNumber, operator, secondNumber);
});
deletes.addEventListener("click", handleDelete);