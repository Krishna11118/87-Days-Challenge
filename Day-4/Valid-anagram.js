
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const frequency = {};

    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char of t) {
        if (!frequency[char]) {
            return false;
        }
        frequency[char]--;
    }

    return true;

};