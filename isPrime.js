function isPrime(number) {
    if(number % 2 !== 0 && number % 3 !== 0){
        return true
    }else{
        return false
    }
}

console.log(isPrime(15))