// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.
//
// Difficulty: easy.

function longest_word(sentence) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log('\nTests for #longest_word');
console.log('===============================================');
console.log(
    'longest_word("short longest") === "longest": ' +
        (longest_word('short longest') === 'longest').toString()
);
console.log(
    'longest_word("one") === "one": ' +
        (longest_word('one') === 'one').toString()
);
console.log(
    'longest_word("abc def abcde") === "abcde": ' +
        (longest_word('abc def abcde') === 'abcde').toString()
);
console.log('===============================================');
