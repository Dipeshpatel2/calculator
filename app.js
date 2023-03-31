// variables created and assigned to classes made in HTML. classes found in brackets.
//querySelector for single class and querySelectorAll for multiple elements of the same class  
// setting them as const numbers for eg-makes all the buttons attached to .number class into an array
const screen = document.querySelector(".screen")
const allClear = document.querySelector(".clear")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const deletes = document.querySelector(".delete")

//when the buttons are pressed, declaring them as variables temporary stores them
let firstNumber = ""
let operator = ""
let secondNubmer = ""

// creating this function means that everytime a button is pressed it will show in the console
const handleNumberClick = (event) =>{
    console.log(event.target.innerText)
}
//
//loop over numbers array
// inside the variable numbers, the forEach goes through the number array accesing each number button in the array
//adding an eventListener will allow each button when pressed to show the event object where we can access the number
numbers.forEach((number) => {
    number.addEventListener("click", handleNumberClick)
})

operators.forEach((operator) => {
    operator.addEventListener("click", handleNumberClick)
})