/** #Concept of reduce()
 * The reduce() method executes a callback function on each element of an array to reduce in to a single value.
 
  */



// Sum of Numbers using reduce
const numbers1 = [1, 2, 3, 4, 5, 6];
const sum = numbers1.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// Find the max value using reduce
const numbers2 = [10, 25, 8, 99, 47];
const max = numbers2.reduce((acc, curr) => (curr > acc ? curr : acc), numbers2[0])
// console.log(max);


// Count occurrences of Elements
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
}, {})