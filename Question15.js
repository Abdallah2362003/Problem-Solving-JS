// Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade. 

function calculatePercentage(physics, chemistry, biology, mathematics, computer) {
    let totalMarks = physics + chemistry + biology + mathematics + computer;
    let percentage = (totalMarks / 500) * 100;
    return percentage;
}

function getGrade(percentage) {
    if (percentage >= 90) {
    return "Grad A";
    } else if (percentage >= 80) {
    return "Grad B";
    } else if (percentage >= 70) {
    return "Grad C";
    } else if (percentage >= 60) {
    return "Grad D";
    } else if (percentage >= 40) {
    return "Grad E";
    } else {
    return "Grad F";
    }
}


var physics = prompt("Enter marks of Physics:");
physics = Number(physics);

var chemistry = prompt("Enter marks of Chemistry:");
chemistry = Number(chemistry);

var biology = prompt("Enter marks of Biology:");
biology = Number(biology);

var mathematics = prompt("Enter marks of Mathematics:");
mathematics = Number(mathematics);

var computer = prompt("Enter marks of Computer:");
computer = Number(computer);


var percentage = calculatePercentage(physics, chemistry, biology, mathematics, computer);
var grade = getGrade(percentage);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);