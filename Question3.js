// 3-Write a program that allows the user to insert 2 integers then print the max


function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
var num1 = prompt("Please enter the first integer:");
num1 = Number(num1);
var num2 = prompt("Please enter the second integer:");
num2 = Number(num2);
var max = findMax(num1, num2);
console.log("The maximum is: " + max);