function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}



console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"]));
