// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

// "2357111317192329313741434753596167717379..."
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a.

// For example, 5 elements from index 10 are: 19232.

// More examples in test cases.

// Tests go up to about index 20000.

// Good luck!

function isPrime(num) {
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solve(a, b) {
    let result = '';
    let num = 2;
    while (result.length < a + b) {
        if (isPrime(num)) {
            result += num.toString();
        }
        num++;
    }
    return result.slice(a, a + b);
}
