function isPalindrome(str){
    str = str.toLowerCase();
    const reverseStr = str.split("").reverse().join("");
    if(str === reverseStr){
        return true
    } else{
        return false
    }
}
console.log(isPalindrome("Racecar"));