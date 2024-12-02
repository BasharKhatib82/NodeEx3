// Bashar Khatib    ID : 066043167
// Tareq Shaltaf    ID : 315483032

"use strict";

// Define the array numbers to check.
let arr = [1, 2, 3, 0, 0, 0, 1, 3];
// Define the counter to sum number of zeros on array.
let zeroCount = 0;

// A loop that goes through the array and counts the number of zeros
arr.forEach(function (elem) {
  zeroCount += elem === 0 ? 1 : 0;
});

// print the sum of zeros to the console.
console.log(`The number of zeros of this array is : ${zeroCount}`);
