//10 - Write a program that allows user to insert integer then print a multiplication table up to 12


function printMultiplicationTable(num) {
    for (var i = 1; i <= 12; i++) {
      console.log(num * i);
    }
}


var num = prompt("Please enter a number:");
num = Number(num);


printMultiplicationTable(num);