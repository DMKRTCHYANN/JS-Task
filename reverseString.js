function reverseString(string) {
    return string.split("").reverse().join('')
}

console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
reverseString("hello"); // Output: "olleh"
reverseString("OpenAI"); // Output: "IAnepO"