const firstString = "Hello, Mahabub";
const secondString = "World";
const fullName = firstString + " : " +secondString
console.log(fullName)

const lent = firstString.length
console.log(lent);

const includes =  secondString.includes('W');
console.log(includes);

let myCharacter = "h";
const indexOf = firstString.indexOf(myCharacter);
console.log(indexOf);

let character = firstString[9];
console.log(character);

const toUpperCase = firstString.toUpperCase();
console.log(toUpperCase);
const toLowerCase = secondString.toLowerCase();
console.log(toLowerCase);

const toLocalUperCase = firstString.toLocaleUpperCase();
console.log(toLocalUperCase);
const toLocalLowerCase = secondString.toLocaleLowerCase();
console.log(toLocalLowerCase);

// subSting 
const mySting = "Mahabub is a Very Bad boy";
const mySting2 = "He is a Good Web Developer in Bangladesh";
const mySting1 = mySting.substring(0, 8);
console.log(mySting1);

const mySting2Sub = mySting2.substring(1);
console.log(mySting2Sub);

// concat 
let myString1s = "Hello";
let myString2s = "world";
let myString3s = "!";
const newSting = myString1s.concat(" : ", myString2s, myString3s);
console.log(newSting);

for(let i = 0; i < myString1s.length; i++){
  console.log(myString1s[i]);
};

console.log(myString1s.slice(0, 4))
console.log(myString1s)
console.log(myString1s.slice(4));
console.log(myString1s);
