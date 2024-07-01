// 14-Write a program to input month number and print number of days in that month.



function getNumberOfDaysInMonth(month, isLeapYear) {
    var days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        days = 31;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        days = 30;
        break;
        case 2:
        days = isLeapYear ? 29 : 28;
        break;
        default:
        days = null;
        break;
    }
    return days;
}

var month = prompt("Enter the month number:");
month = Number(month);

var isLeapYear = false;
if (month === 2) {
    var year = prompt("Enter the year:");
    year = Number(year);
    isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

var daysInMonth = getNumberOfDaysInMonth(month, isLeapYear);
if (daysInMonth !== null) {
    console.log("Days in Month: " + daysInMonth);
} else {
    console.log("Invalid month number.");
}