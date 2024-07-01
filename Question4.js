// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.


function checkSign(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

var num = prompt("Please enter a number:");
num = Number(num);

var sign = checkSign(num);


console.log("The number is " + sign);