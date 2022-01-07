const numbers = document.querySelectorAll(".num");
const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const deleteBtn = document.querySelector(".delete");
let decimalON = false;
let num1;
let num2;
let chosenOperator = "";
let calculationDone = false;
// function for sum
function sum(num1, num2) {
  return Number(num1) + Number(num2);
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
  if (chosenOperator === "") {
  } else if (chosenOperator) {
    num2 = currentDisplay.textContent;
    if (
      chosenOperator === "÷" &&
      Math.round(Number(num2) * 100000000000000000000000000) /
        100000000000000000000000000 ===
        0
    ) {
      return alert("Can't divide by zero");
    } else {
      previousDisplay.textContent = num1 + chosenOperator + num2;
      currentDisplay.textContent =
        Math.round(operate(num1, chosenOperator, num2) * 1000) / 1000;
      chosenOperator = "";
      decimalON = false;
      calculationDone = true;
    }
  }
});
// added event listener for clear button clears everything
clear.addEventListener("click", () => {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  num1 = "";
  num2 = "";
  chosenOperator = "";
  decimalON = false;
  calculationDone = true;
});
// added event listener for operators if the operator is already defined it will give calculate the answer and display on the previous display with the new operator and add the new operator to the chosen operator
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentDisplay.textContent === "") {
      chosenOperator = operator.textContent;
      previousDisplay.textContent = num1 + chosenOperator;
      decimalON = false;
    } else {
      if (
        chosenOperator === "+" ||
        chosenOperator === "-" ||
        chosenOperator === "×" ||
        chosenOperator === "÷"
      ) {
        num2 = currentDisplay.textContent;
        if (chosenOperator === "÷" && Math.round(num2 * 1000) / 1000) {
          return alert("Can't divide by zero");
        } else {
          let answer =
            Math.round(operate(num1, chosenOperator, num2) * 1000) / 1000;
          num1 = answer;
          chosenOperator = operator.textContent;
          previousDisplay.textContent = answer + chosenOperator;
          currentDisplay.textContent = "";
          decimalON = false;
        }
      } else if (chosenOperator === "") {
        num1 = currentDisplay.textContent;
        chosenOperator = operator.textContent;
        previousDisplay.textContent = num1 + operator.textContent;
        currentDisplay.textContent = "";
        decimalON = false;
      }
    }
  });
});
// added event listener for numerical buttons if current display is 0 which is default it will change it to the new input and if it isn't then joins the new input in toa string
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (currentDisplay.textContent === "0" || calculationDone === true) {
      currentDisplay.textContent = num.textContent;
      calculationDone = false;
    } else {
      currentDisplay.textContent += num.textContent;
    }
  });
});
// event listener for decimal button and 0 before itself if there is nothing on the current display or when new calculation starts
decimal.addEventListener("click", () => {
  if (decimalON === false) {
    if (currentDisplay.textContent === "" || calculationDone === true) {
      currentDisplay.textContent = 0 + decimal.textContent;
      decimalON = true;
      calculationDone = false;
    } else {
      currentDisplay.textContent += decimal.textContent;
      decimalON = true;
      calculationDone = false;
    }
  }
});
// event listener for delete button
deleteBtn.addEventListener("click", () => {
  string = currentDisplay.textContent;
  if (string.charAt(string.length - 1) === ".") {
    string = string.substring(0, string.length - 1);
    currentDisplay.textContent = string;
    decimalON = false;
  } else {
    string = string.substring(0, string.length - 1);
    currentDisplay.textContent = string;
  }
});
