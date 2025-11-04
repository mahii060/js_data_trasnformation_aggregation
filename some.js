const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const hasOdd = numbers.some(number => number % 2 === 0);
// console.log(hasOdd);

const users = [
    { name: 'mahi', isLoggedIn: false },
    { name: 'najmul', isLoggedIn: true },
    { name: 'tanjila', isLoggedIn: false },
]
const userLoggedIn = users.some(user => user.isLoggedIn)
// console.log(userLoggedIn);

const products = [
    { name: 'Jeans', stock: 35 },
    { name: 'Gabardine', stock: 40 },
    { name: 'Formal', stock: 0 },
]
const productsStatus = products.some(product => product.stock === 0)
// console.log(productsStatus);

const currentUserRoles = ['user', 'editor', 'admin']
const featureAccessRole = ['admin', 'manager']
const canAccess = currentUserRoles.some(role => featureAccessRole.includes(role));
// console.log(canAccess);