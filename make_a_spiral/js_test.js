// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 11111
// 00001
// 11101
// 10001
// 11111

// and with the size 10:

// 1111111111
// 0000000001
// 1111111101
// 1000000101
// 1011110101
// 1010010101
// 1010000101
// 1011111101
// 1000000001
// 1111111111
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
const spiralize = (size) => {
    // make the box `size` by `size` filled with ones
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push([]);
        for (let x = 0; x < size; x++) {
            result[i].push(1);
        }
    }

    // set first position of the second array to 1
    result[1][0] = 0;
    // set y and x position for first 0
    let xPos = 0;
    let yPos = 1;
    // set the orginal status if there is any moves availabe
    // we will toggle this false when no more moves are available
    let movesAvailable = true;
    // set direction of zeros
    let direction = 'right';

    // create functions for each direction
    // check direction and next direction clockwise if it is possible
    // if both directions are not possible, set movesAvailable to false
    const directions = {
        right: () => {
            if (result[yPos][xPos + 2] === 1 && result[yPos][xPos + 1] === 1) {
                xPos += 1;
                result[yPos][xPos] = 0;
            } else if (
                result[yPos + 2][xPos] === 1 &&
                result[yPos + 1][xPos] === 1
            ) {
                direction = 'down';
            } else {
                movesAvailable = false;
            }
        },
        left: () => {
            if (result[yPos][xPos - 2] === 1 && result[yPos][xPos - 1] === 1) {
                xPos -= 1;
                result[yPos][xPos] = 0;
            } else if (
                result[yPos - 2] === undefined ||
                result[yPos - 2][xPos] === 1
            ) {
                direction = 'up';
            } else {
                movesAvailable = false;
            }
        },
        down: () => {
            if (
                result[yPos + 2] !== undefined &&
                result[yPos + 2][xPos] === 1
            ) {
                yPos += 1;
                result[yPos][xPos] = 0;
            } else if (
                result[yPos][xPos - 2] === 1 &&
                result[yPos][xPos - 1] === 1
            ) {
                direction = 'left';
            } else {
                movesAvailable = false;
            }
        },
        up: () => {
            if (
                result[yPos - 2] !== undefined &&
                result[yPos - 2][xPos] === 1
            ) {
                yPos -= 1;
                result[yPos][xPos] = 0;
            } else if (
                result[yPos][xPos + 2] === 1 &&
                result[yPos][xPos + 1] === 1
            ) {
                direction = 'right';
            } else {
                movesAvailable = false;
            }
        }
    };

    while (movesAvailable) {
        directions[direction]();
    }
    return result;
};

console.log(spiralize(8));
