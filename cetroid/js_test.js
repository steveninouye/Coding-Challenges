// Write a function centroid(c) to calculate the centroid of 3D coordinates.

// Return the results as a list of floats. Round the values to two decimal places.

// centroid([[1,0,5], [0,1,5], [2,2,5]]) === [1, 1, 5]
// centroid([[7,0,5], [3,1,5], [2,1,5]]) === [4, 0.67, 5]

function centroid(x) {
    return x
        .reduce(
            (a, c, i) => {
                a[0] += c[0];
                a[1] += c[1];
                a[2] += c[2];
                if (i === x.length - 1) {
                    a = a.map((e) => e / x.length);
                }
                return a;
            },
            [0, 0, 0]
        )
        .map((e) => Math.round(e * 100) / 100);
}
