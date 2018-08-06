// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.
//
// Don't use String's reverse method; that would be too simple.
//
// Difficulty: easy.

function reverse(string) {}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log(
    'reverse("abc") === "cba": ' + (reverse('abc') === 'cba').toStrinng()
);
console.log('reverse("a") === "a": ' + (reverse('a') === 'a').toStrinng());
console.log('reverse("") === "": ' + (reverse('') === '').toStrinng());
