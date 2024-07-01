//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant


function checkVowelConsonant(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var lowerCaseChar = char.toLowerCase();

    if (vowels.includes(lowerCaseChar)) {
        return "vowel";
    } else {
        return "consonant";
    }
}


var char = prompt("Please enter a character:");


var result = checkVowelConsonant(char);


alert(result);