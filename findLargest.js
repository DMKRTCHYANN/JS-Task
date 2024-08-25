function findLargest(arr = []) {
    return Math.max(...arr)
}

console.log(findLargest([1, 3, 5, 7, 9]))
console.log(findLargest([-10, -5, 0, 5, 10]))
console.log(findLargest([34, 23, 12, 56, 89]))