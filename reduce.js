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
// console.log(maxOfRandomNumbers);

const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];
const bestScorer = players.reduce((max, currentPlayer) => max > currentPlayer.score ? max : currentPlayer.score, players[0].score)
// console.log(bestScorer);

const bestPlayer = players.reduce((bestPlayer, player) => (bestPlayer.score > player.score ? bestPlayer : player), players[0])
// console.log(bestPlayer.name, bestPlayer.score);

const cartItems = [
    { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
    { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

// Always remember when calculating total value, the initial value must be 0;

const subTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), {})
// console.log(subTotal);

// lookup table
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];
const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post
    return table
}, {})

// console.log(lookupTable['p-101']);

// Grouping and aggregating data
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];
// Initiate empty object
// Check if the response already exist
// if it exist the increment the count
// if not then initialize it with 1
const count = surveyResponses.reduce((table, response) => {

    // console.log(table, " : ", response);
    if (table[response]) {
        table[response] = table[response] + 1;
    }
    else {
        table[response] = 1;
    }
    return table
}, {})
// console.log(count);


//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category, calculating the total revenue and the number of items sold for each.

// Steps:
// Init an empty object in which the whole category will be shown
// Init object by category
// Calculate the revenue

const products = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const totalSalesByCategory = products.reduce((table, product) => {

    const { category, price, quantity } = product;

    if (!table[category]) {
        table[category] = {
            totalRevenue: 0,
            productCount: 0
        }
    }

    table[category].totalRevenue += quantity * price;
    table[category].productCount += quantity;

    // console.log(table, " : ", product);
    return table
}, {})
// console.log(totalSalesByCategory);

//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
];

const posts = [
    { id: 1, userId: 102, title: "My first post" },
    { id: 2, userId: 101, title: "React Hooks" },
    { id: 3, userId: 101, title: "Data Structures" },
    { id: 4, userId: 103, title: "CSS is fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];

const postByUserId = posts.reduce((table, post) => {
    const { userId } = post;
    if (!table[userId]) {
        table[userId] = []
    }
    table[userId].push(post)
    return table
}, {})

/*
const user= {
  '101': [
    { id: 2, userId: 101, title: 'React Hooks' },
    { id: 3, userId: 101, title: 'Data Structures' }
  ],

  '102': [
    { id: 1, userId: 102, title: 'My first post' },
    { id: 5, userId: 102, title: 'Node.js streams' }
  ],

  '103': [ { id: 4, userId: 103, title: 'CSS is fun' } ]
}


*/
// console.log(postByUserId);
const userWithPost = users.map(user => {
    return {
        ...user,
        post: postByUserId[user.id] || [],
    }
})
/*
[

{"id":101,"name":"Alice","post":[{"id":2,"userId":101,"title":"React Hooks"},{"id":3,"userId":101,"title":"Data Structures"}]},

{"id":102,"name":"Bob","post":[{"id":1,"userId":102,"title":"My first post"},{"id":5,"userId":102,"title":"Node.js streams"}]},

{"id":103,"name":"Charlie","post":[{"id":4,"userId":103,"title":"CSS is fun"}]}

]
*/
console.log(JSON.stringify(userWithPost));