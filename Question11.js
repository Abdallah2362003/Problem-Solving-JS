// 11-Write a program that allows to user to insert number then print all even numbers between 1 to this number.


function printEvenNumbers(num) {
    for (var i = 2; i <= num; i += 2) {
        console.log(i);
    }
}


var num = prompt("Please enter a number:");
num = Number(num);


printEvenNumbers(num);