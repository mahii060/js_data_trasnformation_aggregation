const id = new Set([3, 6, 9, 7]);

// Add methods in set 
const fruits = new Set(['apple', 'orange', 'kiwi'])
// console.log(fruits);
fruits.add('banana')

// Set doesn't allow duplication.
fruits.add('banana')

// console.log(fruits);

// has method of Set

// console.log(fruits.has('banana'));
// console.log(fruits.has('mango'));

// delete method
// fruits.delete('watermelon')
// console.log(fruits);

// Clear method
// fruits.clear();
// console.log(fruits);


// entries method
const numbers = new Set([200, 390, 450, 294, 500, 543])
// console.log(numbers.entries());
for (const number of numbers.entries()) {
    // console.log(number)
}

// values method

const names = new Set(['mahi', 'tanjila', 'mahmuda', 'nazmul'])
for (const name of names.values()) {
    // console.log(name);
}
for (const name of names) {
    // console.log(name);
}

// Size property

// console.log(names.size);


// forEach in Set 
names.forEach(name => {
    // console.log(name);
})

// How to use a set to Get Unique Value from an Array.

const numbersOne = [1, 2, 4, 1, 6, 8, 2, 5, 9, 2, 0, 9, 7, 6, 3, 4, 6, 7, 8, 4, 2, 1, 5, 8, 9, 0, 2, 4, 5, 3, 2, 6, 8, 9, 6];

const uniqueNumbers = new Set(numbersOne);
// console.log(uniqueNumbers);

// Set union: take all the unique value from the  elements without duplicating
const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])
const union = new Set([...setA, ...setB])
// console.log(union);
// console.log([...setA]);

// Set intersection: take common elements only
const intersection = new Set([...setA].filter(x => setB.has(x)))
// console.log(intersection);


// Differences: take element in one set but not the other
const difference = new Set([...setB].filter(x => !setA.has(x)))
// console.log(difference);

const union2 = new Set([...setA, ...setB])
console.log(union2);