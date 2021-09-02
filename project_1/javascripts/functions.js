//jshint esversion: 6

// Step 3B - average of array function
let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

// Step 3C - return largest number in array function
let arr = [];
let largest = 0;
let arrMax = arr => {
  arr.forEach(function(value) {
    if (largest < value) largest = value;
  });
  console.log(largest);
};

// Step 3D - returns the sum of even numbers in the array
let arr = [];
let sumEvens = arr => {
  let sum = 0;
  for (let value of arr) {
    if (value % 2 == 0) {
      sum = sum + value;
    }
  }
  return sum;
};

// Step 3E XC - returns the number representing ch's position in alphabet
let ch = "";
function alphaPosition(ch) {
  let string = ch.toLowerCase();
  return string.charCodeAt(0) - 96;
}
