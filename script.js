const numbers = document.querySelectorAll(".num");
const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
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
// when qual button is clicked it will calculate and give the answer in current display and show the expression in previous display
equal.addEventListener("click", () => {
  if (chosenOperator) {
    num2 = currentDisplay.textContent;
    previousDisplay.textContent = num1 + chosenOperator + num2;
    currentDisplay.textContent = operate(num1, chosenOperator, num2);
    chosenOperator = "";
  }
});
// added event listener for clear button clears everything
clear.addEventListener("click", () => {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  num1 = "";
  num2 = "";
  chosenOperator = "";
});
// added event listener for operators if the operator is already defined it will give calculate the answer and display on the previous display with the new operator and add the new operator to the chosen operator
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentDisplay.textContent === "") {
      chosenOperator = operator.textContent;
      previousDisplay.textContent = num1 + chosenOperator;
    } else {
      if (
        chosenOperator === "+" ||
        chosenOperator === "-" ||
        chosenOperator === "×" ||
        chosenOperator === "÷"
      ) {
        num2 = currentDisplay.textContent;
        let answer = operate(num1, chosenOperator, num2);
        num1 = answer;
        chosenOperator = operator.textContent;
        previousDisplay.textContent = answer + chosenOperator;
        currentDisplay.textContent = "";
      } else if (chosenOperator === "") {
        num1 = currentDisplay.textContent;
        chosenOperator = operator.textContent;
        previousDisplay.textContent = num1 + operator.textContent;
        currentDisplay.textContent = "";
      }
    }
  });
});
// added event listener for numerical buttons if current display is 0 which is default it will change it to the new input and if it isn't then joins the new input in toa string
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (currentDisplay.textContent === "0") {
      currentDisplay.textContent = num.textContent;
    } else {
      currentDisplay.textContent += num.textContent;
    }
  });
});

decimal.addEventListener("click", () => {
  currentDisplay.textContent += decimal.textContent;
});
