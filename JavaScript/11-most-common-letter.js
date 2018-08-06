// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

function most_common_letter(string) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'most_common_letter("abca") === ["a", 2]: ' +
        (most_common_letter('abca') === ['a', 2]).toString()
);
console.log(
    'most_common_letter("abbab") === ["b", 3]: ' +
        (most_common_letter('abbab') === ['b', 3]).toString()
);
