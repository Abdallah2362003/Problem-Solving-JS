// 2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no


function Divide() {
    var userNumber = prompt("Please enter a number:");
    var number = Number(userNumber);

    if (number % 3 === 0 && number % 4 === 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Call the function
Divide();