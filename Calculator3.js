var readlineSync = require("readline-sync");

var firstNumber = readlineSync.questionInt("Enter the first number: ");
var secondNumber = readlineSync.questionInt("Enter second number:");
var operation = readlineSync.question("Select operation (add/sub/mul/div):");

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function Calculator(firstNumber, secondNumber, enteredOperation) {
    console.log("Calculating");
    if (enteredOperation == "add") {
        console.log(addition(firstNumber, secondNumber));
    } else if (enteredOperation == "sub") {
        console.log(subtraction(firstNumber, secondNumber));
    } else if (enteredOperation == "mul") {
        console.log(multiplication(firstNumber, secondNumber));
    } else if (enteredOperation == "div") {
        console.log(division(firstNumber, secondNumber));
    } else {
        console.log("Invalid. Try Again!");
    }
}

Calculator(firstNumber, secondNumber, operation);
