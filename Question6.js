// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


var num = prompt("Please enter a number:");
num = Number(num);


var result = checkEvenOdd(num);

console.log(result);