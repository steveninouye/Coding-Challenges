// Write a method that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// You'll want to use the `split` and `join` methods. Also, the String
// method `upcase`, which converts a string to all upper case will be
// helpful.
//
// Difficulty: medium.

function capitalize_words(string) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'capitalize_words("this is a sentence") === "This Is A Sentence": ' +
        (
            capitalize_words('this is a sentence') === 'This Is A Sentence'
        ).toString()
);
console.log(
    'capitalize_words("mike bloomfield") === "Mike Bloomfield": ' +
        (capitalize_words('mike bloomfield') === 'Mike Bloomfield').toString()
);
