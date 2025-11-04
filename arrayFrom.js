let text = "ABCDEFG";
const obj = {
    name: 'Mahi', age: 25, isMarried: false
}
// console.log(Array.from(Object.keys(obj)));
// console.log(Array.from(text));

const newArr = Array.from({ length: 5 }).fill(0)
// console.log(newArr);

const numbers = [4, 9, 13, 21, 33, 45]
// console.log(numbers);
numbers.fill(888, 1, 2)
// console.log(numbers);

const arr1 = Array.from({ length: 5 }, (_, i) => ++i)
console.log(arr1);