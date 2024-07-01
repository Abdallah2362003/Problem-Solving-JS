// 4-Write a program to check whether a number is even or odd 


function checkEvenOdd(num) {
    var result;
    switch (num % 2) {
        case 0:
        result = "Even";
        break;
        case 1:
        result = "Odd";
        break;
    }
    return result;
}

var num = prompt("Enter a number:");

var result = checkEvenOdd(num);
console.log(result);