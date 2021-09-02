//js esversion: 6

//Step 3A: A function that accepts a string and returns a string with the words reversed
let revWords1 = s => {
  let reverseString = "";
  for (var i = s.length - 1; i >= 0; --i) {
    reverseString += s[i];
  }
  return reverseString;
};
//Step 3B: Modify the function in 3A to use the array.forEach method
let revWords2 = s => {
  let result = "";
  s.split("").forEach(function(elem) {
    result = elem + result;
  });
  return result;
};

//Step 3C: Modify the function in 3B by using a for..of loop and arrow syntax
let revWords3 = s => {
  let reverseString = "";
  for (var ch of s) {
    reverseString = ch + reverseString;
  }
  return reverseString;
};

//Step 5 XC: Write a function that detects if there are duplicate characters

let containsDuplicates = (s) => {
  //[0, 0, 0, ...,]
  let charCount = new Array(26).fill(0), ASCIIcode;
  for (let i in s) {
    ASCIIcode = s[i].toUpperCase().charCodeAt(0) - 65;
    if (charCount[ASCIIcode] > 0) {
      return true;
    } else {
      charCount[i]++;
    }
  }
  return false;
};
