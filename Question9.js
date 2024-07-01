//9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number


function printNumbers(num) {
    for (var i = 1; i <= num; i++) {
        console.log(i);
    }
}


var num = prompt("Please enter a number:");
num = Number(num);


printNumbers(num);