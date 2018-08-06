// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

function nearby_az(string) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'nearby_az("baz") === true: ' + (nearby_az('baz') === true).toString()
);
console.log(
    'nearby_az("abz") === true: ' + (nearby_az('abz') === true).toString()
);
console.log(
    'nearby_az("abcz") === true: ' + (nearby_az('abcz') === true).toString()
);
console.log(
    'nearby_az("a") === false: ' + (nearby_az('a') === false).toString()
);
console.log(
    'nearby_az("z") === false: ' + (nearby_az('z') === false).toString()
);
console.log(
    'nearby_az("za") === false: ' + (nearby_az('za') === false).toString()
);
