function fibonacci(n) {
    const fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}


const n = 10;
console.log(fibonacci(n));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
