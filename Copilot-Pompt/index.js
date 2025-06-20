// sort an array of numbers.
function sortArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  return arr.slice().sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// whow to find the variable is it palindrome or not ?\
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
isPalindrome("Madam, in Eden, I'm Adam"); // Output: true
// how to find the variable is it prime or not ?
function isPrime(num) {
  if (typeof num !== "number" || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
  
}
