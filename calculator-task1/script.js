
let displayValue = "";

function appendNumber(num) {
  displayValue += num;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}