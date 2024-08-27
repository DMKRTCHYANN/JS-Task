function mostFrequentItem(arr) {
    const frequency = {};

    let mostFrequent = null;
    let maxCount = 0;

    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

console.log(mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
console.log(mostFrequentItem(["apple", "banana", "apple", "orange", "banana", "banana"]));
console.log(mostFrequentItem([10, 20, 10, 30, 20, 10]));
