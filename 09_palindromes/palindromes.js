const palindromes = function (string) {
    characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    cleanedString = string
    .toLowerCase()
    .split('')
    .filter((char) => characters.includes(char))
    .join('');

    reversedString = cleanedString
    .split('')
    .reverse()
    .join('');

    return reversedString === cleanedString;
    
};

// Do not edit below this line
module.exports = palindromes;
