const person ={
  id: 1,
  name: 'Mahabub',
  age: 21,
  subjects: ['math', 'history', 'bangla']
};

const {name, id} = person;
console.log(`this is name: ${name} this is id: ${id}`);
console.log(person['age']);
console.log(person.name);
console.log(person.subjects[2]);
console.log(person.subjects.indexOf('history'))
console.log(person.subjects.length);
const myage = 'age';
console.log(person[myage])

// Object destructurin 

const persons = {name: 'mahabub', ids: 5, address: 'netrokona'};
const {ids} = persons;

// shorthand Object declarytion 
let a = 5;
let b = 6;
b= 9

const obj = {a, b};
console.log(obj)

