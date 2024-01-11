// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
        return number2;
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        const currentWord = words [i];

    if (currentWord.length > longestWord.length) {
        longestWord = currentWord
        }
    } return longestWord;
}

const longestWord = findLongestWord(words);

console.log("Longest Word: ", longestWord);



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }

    const sum2 = sumNumbers(numbers2)
    const average = sum2 / numbers2.length;

    return average;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const search = "starting"

function doesWordExist(words2, search) {
    if (words2.length === 0) {
        return null;
    }

    for (let i = 0; i < words2.length; i++) {
        if (words2[i] === search) {
        return true;
    }
}

        return false;

}