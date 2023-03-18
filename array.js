const numbers = [45, 41, 32, 96];
const leangth = numbers.length;
// console.log(leangth);
// console.log(numbers[2]);
// console.log(numbers[0]);
numbers.push(5);
console.log(numbers);
numbers.pop();
console.log(numbers);
// change the value of an element using its index

numbers[0] = 85;
console.log(numbers);

const fruti = ['apple', 'orange',];
fruti['1'] = 'al';
console.log(fruti);

// indexOf Find in array

const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('orange', 2));
console.log(fruits.indexOf('grape', -3));
console.log(fruits.includes('banana'))
console.log(Array.isArray(fruits))

// slice and splice 
let fruitss = ['apple', 'banana', 'cherry', 'date'];
let sliceArray = fruitss.slice(0, 3);
console.log(sliceArray);
console.log(fruitss);


const fruitsss = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let spliceArray = fruitsss.splice(3, 3, 'Aldo', 'Faldo');
console.log(sliceArray);
console.log(fruitsss)

let shifteArray = fruitsss.shift();
console.log(shifteArray);
console.log(fruitsss);

const newLength = fruitsss.unshift('a', 'kiwi');
console.log(newLength);
console.log(fruitsss);
const joinMathod = fruitsss.join('-:');
console.log(joinMathod)
console.log(fruitsss)

const numberss = [4, 45, 23, 65, 474,23];
const multipliedNumbers  = numberss.map(number => number * 2);
console.log(multipliedNumbers );
// array destructurin 
const arr = ['item1', 'item2', 'item3', 'item4'];
const [, balance] = arr