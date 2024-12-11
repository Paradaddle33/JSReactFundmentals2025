const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else return false;
};

const isNumberTwoDigits = (num) => {
  if (`${num}`.length === 2) {
    return true;
  } else return false;
};

/**
 * "findFirst" should apply a callback on each number within an
 * array of numbers. It should return a single number.
 * It should return the first number where the callback returns true.
 *
 * @param {array} arrayOfNum
 * @param {function} callback
 * @returns {number}
 */

const findFirst = (arrayOfNum, callback) => {
  // Loop through each number in "arrayOfNum"
  for (let i = 0; i < arrayOfNum.length; i++) {
    // Apply the callback on each number
    let result = callback(arrayOfNum[i]);
    // If the result is true, return the current number
    if (result) {
      return arrayOfNum[i];
    }
  }
  // Return undefined if no number satisfies the callback condition
  return undefined;
};


 console.log(findFirst([1, 3, 7, 8, 20], isNumberEven)); 
 console.log(findFirst([4, 500, 30, 2], isNumberTwoDigits)); 
 

// DO NOT DELETE BELOW. It is for the tests.

export { findFirst };
