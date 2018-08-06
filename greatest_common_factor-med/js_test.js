// Write a method that takes in two numbers. Return the greatest
// integer that evenly divides both numbers. You may wish to use the
// `%` modulo operation.
//
// Difficulty: medium.

function greatest_common_factor(number1, number2) {
    let divider = 1;
    let largeNum = number1 >= number2 ? number1 : number2;
    let smallNum = largeNum === number1 ? number2 : number1;
    while (divider <= smallNum) {
        let testNum = smallNum / divider;
        if (largeNum % testNum === 0) {
            return testNum;
        }
        divider++;
    }
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log('\nTests for #greatest_commmon_factor');
console.log('===============================================');
console.log(
    'greatest_common_factor(3, 9) === 3: ' +
        (greatest_common_factor(3, 9) === 3).toString()
);
console.log(
    'greatest_common_factor(16, 24) === 8: ' +
        (greatest_common_factor(16, 24) === 8).toString()
);
console.log(
    'greatest_common_factor(3, 5) === 1: ' +
        (greatest_common_factor(3, 5) === 1).toString()
);
console.log('===============================================');
