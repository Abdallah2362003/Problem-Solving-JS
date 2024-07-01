// 2- Write a program to check whether an alphabet is vowel or consonant 


function checkVowelOrConsonant(char) {
    var result;
    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        result = "Vowel";
        break;
        default:
        result = "Consonant";
        break;
    }
    return result;
}

var char = prompt("Enter a character:");


var result = checkVowelOrConsonant(char);
console.log(result);