// 5-Write a program to check whether a number is positive or negative or zero


function checkNumber(num) {
    var result;
    switch (true) {
        case num > 0:
        result = "Positive";
        break;
        case num < 0:
        result = "Negative";
        break;
        case num === 0:
        result = "Zero";
        break;
    }
    return result;
}
var num = prompt("Enter a number:");

var result = checkNumber(num);
console.log(result); 