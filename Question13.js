// Write a program to enter marks of five subjects and calculate total, average and percentage.


function calculateTotalAveragePercentage(subject1, subject2, subject3, subject4, subject5) {
    var total = subject1 + subject2 + subject3 + subject4 + subject5;
    var average = total / 5;
    var percentage = (total / 500) * 100;
    return { total, average, percentage };
}

var subject1 = prompt("Enter marks of subject 1:");
subject1 = Number(subject1);

var subject2 = prompt("Enter marks of subject 2:");
subject2 = Number(subject2);

var subject3 = prompt("Enter marks of subject 3:");
subject3 = Number(subject3);

var subject4 = prompt("Enter marks of subject 4:");
subject4 = Number(subject4);

var subject5 = prompt("Enter marks of subject 5:");
subject5 = Number(subject5);

var result = calculateTotalAveragePercentage(subject1, subject2, subject3, subject4, subject5);
console.log("Total marks = " + result.total);
console.log("Average Marks = " + result.average);
console.log("Percentage = " + result.percentage);