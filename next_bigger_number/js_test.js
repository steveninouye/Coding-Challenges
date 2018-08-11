// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(num) {
    // Break digits into an array that is a copy of `num`
    let numArr = [...num.toString()].map((e) => parseInt(e, 10));
    // start check with the tens digit and move to the left for each loop
    // check if there is a number to the right if there is a larger number
    for (var digitIdx = numArr.length - 2; digitIdx >= 0; digitIdx--) {
        let trailingNums = numArr.slice(digitIdx + 1);
        let digit = numArr[digitIdx];
        // if there is a digit greater than the digit checking
        if (Math.max(...trailingNums) > digit) {
            // find the index of that digit
            let nextNumIdx = trailingNums.findIndex((e) => e > digit);
            // find the value of the digit and store it while replacing it with the digit
            let nextNum = trailingNums.splice(nextNumIdx, 1, digit);
            // chop off from the digit on from the result and insert the new trailing numbers
            numArr.splice(
                digitIdx,
                numArr.length,
                nextNum,
                ...trailingNums.sort()
            );
            // calculate the value of the array
            return numArr
                .reverse()
                .reduce((a, c, i) => a + c * Math.pow(10, i));
        }
    }
    // if no number greater is found, return -1
    return -1;
}
