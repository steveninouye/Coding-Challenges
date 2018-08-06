// Write a method that takes in an integer `offset` and a string.
// Produce a new string, where each letter is shifted by `offset`. You
// may assume that the string contains only lowercase letters and
// spaces.
//
// When shifting "z" by three letters, wrap around to the front of the
// alphabet to produce the letter "c".
//
// You'll want to use String's `ord` method and Integer's `chr` method.
// `ord` converts a letter to an ASCII number code. `chr` converts an
// ASCII number code to a letter.
//
// You may look at the ASCII printable characters chart:
//
//     http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
//
// Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to
// 'z' having code 122.
//
// You may also want to use the `%` modulo operation to handle wrapping
// of "z" to the front of the alphabet.
//
// Difficulty: hard. Because this problem relies on outside
// information, we would not give it to you on the timed challenge. :-)

function caesar_cipher(offset, string) {
    let x = string
        .split('')
        .map((letter) => {
            let letterCode = letter.charCodeAt(0);
            if (letterCode == 32) {
                return ' ';
            } else {
                let nxtLetterCode =
                    letterCode + offset < 123
                        ? letterCode + offset
                        : letterCode - 122 + 96 + offset;
                return String.fromCharCode(nxtLetterCode);
            }
        })
        .join('');
    return x;
}
//   result = ""

//   string.each_char do |letter|

//     // if the letter ASCII code is NOT between 97 ("a") and 122 ("z") (inclusive),
//     // add it to our result without shifting it and skip to the next letter.
//     unless letter.ord.between?("a".ord, "z".ord)
//       result << letter
//       next
//     end

//     // "a".ord == 97, the ASCII code for "a"
//     letter_code = letter.ord - "a".ord

//     // shift the code, and use % 26 to wrap it (there are 26 letters)
//     shifted_code = (letter_code + offset) % 26

//     // to convert back to ASCII, add "a".ord (or 97) back
//     ascii_code = shifted_code + "a".ord

//     result << ascii_code.chr

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log('\nTests for #caesar_cipher');
console.log('===============================================');
console.log(
    'caesar_cipher(3, "abc") === "def": ' +
        (caesar_cipher(3, 'abc') === 'def').toString()
);
console.log(
    'caesar_cipher(3, "abc xyz") === "def abc": ' +
        (caesar_cipher(3, 'abc xyz') === 'def abc').toString()
);
console.log('===============================================');
