const fs = require("fs");
/**
 * Read the input txt file
 * Iterate to sort the pair from smallest to largest
 * Iterate through each (sorted) pair to find total distance between the left list and the right list
 * Find the sum of the total distances
 *
 * example:     19394   30201
 *              88523   40612
 *
 *              13499   00123 [1, 3, 3, 7, 6] = 20
 *              23588   01246 [2, 2, 3, 4, 2] = 13
 *              total distance 33
 */

// Read the file asynchronously
fs.readFile("input-small-sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const split = data.split("\n");
  // Iterate
  split.forEach((element) => splitAgain(element));
});

// [ '19394   30201', '88523   40612' ]
const splitAgain = (row) => {
  //'19394   30201'
  // Split again and trim
  const sanitized = row.split(/\s+/);
  // Iterate and call sort
  const sortedLists = sort(sanitized);
  console.log(calculateDifference(sortedLists));
  // find the sum

};

/**
 * @param leftAndRightList array of two strings
 */
const sort = (leftAndRightList) => {
  const sortedList = leftAndRightList.map((list) => bubbleSort(list));
  return sortedList;
};

const bubbleSort = (inputString) => {
  // Split the string into an array of numbers
  // Convert each character to a number
  let arr = inputString.split("").map(Number);

  // Implement Bubble Sort
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // Return the sorted array as a string
  return arr.join("");
};

const calculateDifference = (sortedList) => {
//   console.log("sortedList: ", sortedList);
  // [ '13499', '00123' ]
  // create a loop to find the difference of the values at each index
  let difference = 0;
  for (let index = 0; index < sortedList[0].length; index++) {
    // console.log('sortedList[0][index]: ', sortedList[0][index]);
    // console.log('sortedList[1][index]: ', sortedList[1][index]);
    difference += Math.abs(sortedList[0][index] - sortedList[1][index]);
  }
  return difference;
};

const totalSum = (differences) => {
    let sum = 0;
    
}

