// 3- Write a program to find maximum between two numbers


function findMax(num1, num2) {
    var max;
    switch (num1 > num2) {
        case true:
        max = num1;
        break;
        case false:
        max = num2;
        break;
    }
    return max;
}

var num1 = prompt("Enter the first number:");
num1 = Number(num1);

var num2 = prompt("Enter the second number:");
num2 = Number(num2);

var max = findMax(num1, num2);
console.log("Maximum: " + max);