const palindromes = function (string) {
    string = string.replace(/[.,! ]/g, "").toLowerCase();
    reversedString = string.split("").reverse();
    for (let i=0; i<reversedString.length; i++) {
        if (string.charAt(i) !== reversedString[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
