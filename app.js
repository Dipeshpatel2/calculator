// variables created and assigned to classes made in HTML. classes found in brackets.
//querySelector for single class and querySelectorAll for multiple elements of the same class  
// setting them as const numbers for eg-makes all the buttons attached to .number class into an array
const screen = document.querySelector(".screen")
const topScreen = document.querySelector(".top-screen")
const allClear = document.querySelector(".clear")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const deletes = document.querySelector(".delete")
const equal = document.querySelector(".equals")

//when the buttons are pressed, declaring them as variables temporary stores them
let firstNumber = "";
let operator = "";
let secondNumber = "";
let addDecimal = false;
let result

// creating this function means that everytime a button is pressed it will show in the console
const handleNumberClick = (event) =>{
    if (screen.innerText == "+"){
        topScreen.innerText += " + "
        screen.innerText= ""
    } else if (screen.innerText == "-"){
        topScreen.innerText += " - "
        screen.innerText= ""
    } else if (screen.innerText == "/"){
        topScreen.innerText += " / "
        screen.innerText= ""
    }else if (screen.innerText == "*"){
        topScreen.innerText += " * "
        screen.innerText= ""    
    }else if (screen.innerText === '.' && !addDecimal){
        addDecimal = true;
    }else if (screen.innerText === '.' && addDecimal){
        return;
    }    
    //originally below was const innerText = parseInt(event.target.innerText)
    const innerText = (event.target.innerText)
    //screen.innerText = screen.innerText+innerText
    screen.innerText += innerText
}
const handleOperatorClick = (event) =>{
    const innerText = (event.target.innerText)
    operator = (innerText)
    firstNumber = screen.innerText
    console.log(firstNumber)
    topScreen.innerText = firstNumber
    screen.innerText = operator
}

const handleClearClick = () =>{
    screen.innerText = ""
    topScreen.innerText = ""
}

const handleEqual = (firstNumber, operator, secondNumber) =>{
secondNumber= screen.innerText
    if (operator == '+') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
}
else if (operator == '-') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
}
else if (operator == '*') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
}
else {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
}
screen.innerText= result
}
//
//loop over numbers array
// inside the variable numbers, the forEach goes through the number array accesing each number button in the array
//adding an eventListener will allow each button when pressed to show the event object where we can access the number
numbers.forEach((number) => {
    number.addEventListener("click", handleNumberClick)
})

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorClick)
})

allClear.addEventListener("click", handleClearClick)

equal.addEventListener("click", () =>{
 handleEqual(firstNumber,operator,secondNumber)})

