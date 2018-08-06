// Write a method that takes in a string and returns the number of
// letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of
// letters that repeat, not the number of times they repeat in the
// string.
//
// Difficulty: hard.

function num_repeats(string) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'num_repeats("abdbc") === 1: ' + (num_repeats('abdbc') === 1).toString()
);
// one character is repeated
console.log(
    'num_repeats("aaa") === 1: ' + (num_repeats('aaa') === 1).toString()
);
console.log(
    'num_repeats("abab") === 2: ' + (num_repeats('abab') === 2).toString()
);
console.log(
    'num_repeats("cadac") === 2: ' + (num_repeats('cadac') === 2).toString()
);
console.log(
    'num_repeats("abcde") === 0: ' + (num_repeats('abcde') === 0).toString()
);
