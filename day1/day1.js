const fs = require('fs');
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

fs.readFile('input-small-sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const split = data.split("\n");
    console.log('File content:', split);
});
  
// [ '19394   30201', '88523   40612' ]
const bubbleSort = () => {
    // Split again and trim

}