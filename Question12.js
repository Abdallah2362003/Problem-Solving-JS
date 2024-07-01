// 12-Write a program that take two integers then print the power.


function calculatePower(base, exponent) {
    var result = 1;
    for (var i = 1; i <= exponent; i++) {
      result *= base;
    }
    return result;
}


var base = prompt("Please enter the base:");
base = Number(base);

var exponent = prompt("Please enter the exponent:");
exponent = Number(exponent);


var power = calculatePower(base, exponent);
console.log(power);