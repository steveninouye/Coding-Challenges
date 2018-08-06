// Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `nil`.
//
// Difficulty: medium.

function two_sum(nums) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'two_sum([1, 3, 5, -3]) === [1, 3]: ' +
        (two_sum([1, 3, 5, -3]) === [1, 3]).toString()
);
console.log(
    'two_sum([1, 3, 5]) === nil: ' + (two_sum([1, 3, 5]) === nil).toString()
);
