// 5-Write a program that take 3 integers from user then print the max element and the min element.



function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}


function findMin(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    }
}


var num1 = prompt("Please enter the first integer:");
num1 = Number(num1);


var num2 = prompt("Please enter the second integer:");
num2 = Number(num2);


var num3 = prompt("Please enter the third integer:");
num3 = Number(num3);


var max = findMax(num1, num2, num3);
var min = findMin(num1, num2, num3);


console.log("Max element = " + max);
console.log("Min element = " + min);