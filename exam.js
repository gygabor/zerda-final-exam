// Create a function that takes an array and a number and shifts the values of the array by the given number like: [1, 2, 3, 4, 5] and 2 becomes [4, 5, 1, 2, 3]

'use strict';

const array = [1, 2, 3, 4, 5];

function shiftValues(array, number){
  let array2 = [];
  let pos = number + 1;
  let i = 0;

  if (pos > array.length) {
    pos = (number - array.length) + 1;
  }

  if (pos < array.length) {
    while(pos < array.length){
      array2.push(array[pos]);
      ++pos;
    }
  }

  while(i <= number) {
    array2.push(array[i]);
    ++i;
  }
  console.log(array2)
  return array2;
}

console.log(shiftValues(array, 2));
