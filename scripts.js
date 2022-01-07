const numbers = document.querySelectorAll(".num");
const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
let decimalON = false;
let num1;
let num2;
let chosenOperator = "";
// function for sum
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

// function for subtract
function subtract(num1, num2) {
  return num1 - num2;
}
// function for multiply
function multiply(num1, num2) {
  return num1 * num2;
}
// function for divide
function divide(num1, num2) {
  return num1 / num2;
}
// function for operating with the numbers when one of the operator is given
function operate(num1, operator, num2) {
  if (operator === "+") {
    return sum(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "×") {
    return multiply(num1, num2);
  } else if (operator === "÷") {
    return divide(num1, num2);
  }
}
//event listener for numbers
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (currentDisplay.textContent === "0") {
      currentDisplay.textContent = num.textContent;
    } else {
      currentDisplay.textContent += num.textContent;
    }
  });
});
//event listener for operators
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (chosenOperator === "") {
      num1 = currentDisplay.textContent;
      chosenOperator = operator.textContent;
      currentDisplay.textContent = num1 + chosenOperator;
    }
  });
});
//function for operating
