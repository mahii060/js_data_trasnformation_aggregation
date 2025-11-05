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
// console.log(countFruits);


const names = ['safwan', 'himel', 'sifat', 'kawsar', 'mahi', 'safwan', 'tanvir', 'himel', 'kawsar'];
// Output: {safwan: 3, himel:2, kawsar: 2}

const nameCount = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc
}, {})
// console.log(nameCount);



// Flatten an Array
const nested = [[1, 2], [3, 4], [5]];

const flatArr1 = nested.reduce((acc, curr) => acc.concat(curr), []);
const sumOfFlatArr1 = flatArr1.reduce((sum, curr) => sum + curr, 0)
// console.log(sumOfFlatArr1);
const flatArr2 = nested.flat(Infinity)

// console.log(flatArr1, flatArr2); // Output: [1, 2, 3, 4, 5]


/*Flatten an Array
const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // Output: [1, 2, 3, 4, 5]


Calculate Total Price of Products
const cart = [
  { name: 'Laptop', price: 50000 },
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 1500 }
];

const total = cart.reduce((acc, item) => acc + item.price, 0);

console.log(total); // Output: 52000



Grouping by Property
const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 20 }
];

const grouped = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person.name);
  return acc;
}, {});

console.log(grouped);
// Output: { 20: ['Alice', 'Charlie'], 21: ['Bob'] }

*/


const randomNumbers = [44, 98, 49, 39, 92, 98, 342, 983, 9, 3, 8, 334];
const maxOfRandomNumbers = randomNumbers.reduce((acc, curr) => acc > curr ? acc : curr, randomNumbers[0])
console.log(maxOfRandomNumbers);