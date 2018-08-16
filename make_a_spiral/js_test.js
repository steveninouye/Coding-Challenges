// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 11111
// ....1
// 111.1
// 1...1
// 11111

// and with the size 10:

// 1111111111
// .........1
// 11111111.1
// 1......1.1
// 1.1111.1.1
// 1.1..1.1.1
// 1.1....1.1
// 1.111111.1
// 1........1
// 1111111111
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

var spiralize = function(size) {
  let directions = ['rgt', 'dwn', 'lft', 'up'];
  let answ = [];
  // set starting position from top left of box
  let xCoor = 0; // positive goes right in box
  let yCoor = 0; // positive goes down in box
  // make the box `size` by `size` filled with zeros
  for (let i = 0; i < size; i++) {
    answ.push([]);
    for (let x = 0; x < size; x++) {
      answ[i].push(0);
    }
  }
  // set the first 1
  answ[yCoor][xCoor] = 1;
  // recursive function to check two steps ahead
  const checkTwoSteps = (xCoor, yCoor, direction) => {
    if(direction === 'rgt'){

    } else if (direction === 'dwn'){

    } else if (direction === 'lft'){

    } else if (direction === 'up') {

    }
  }

  return answ;
};

spiralize(5).forEach(e => console.log(e));
