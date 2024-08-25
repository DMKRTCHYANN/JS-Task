function findAverage(arr = []) {
    let average = 0
    for (let item of arr) {
        average += item

    }
    return average / arr.length
}

console.log(findAverage([10, 20, 30, 40, 50])); // Output: 30
findAverage([1, 2, 3, 4, 5]); // Output: 3
findAverage([100, 200, 300]); // Output: 200