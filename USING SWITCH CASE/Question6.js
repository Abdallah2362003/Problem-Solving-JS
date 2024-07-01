//6- Write a program to create Simple Calculator.


function calculate(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        if (num2 === 0) {
            result = "Error: Division by zero is not allowed.";
        } else {
            result = num1 / num2;
        }
        break;
        default:
        result = "Error: Invalid operator.";
        break;
    }
    return result;
}

var num1 = prompt("Enter the first number:");
num1 = Number(num1);

var num2 = prompt("Enter the second number:");
num2 = Number(num2);

var operator = prompt("Enter an operator (+, -, *, /):");

var result = calculate(num1, num2, operator);
console.log(result);