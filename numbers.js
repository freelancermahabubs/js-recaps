// জাভাস্ক্রিপ্টে নাম্বার (Number) হল একটি ডেটা টাইপ যা সংখ্যার মান সংরক্ষণ করে। জাভাস্ক্রিপ্ট এ Number ডেটা টাইপের দুটি সাব টাইপ রয়েছে যা হল integer এবং float।

// জাভাস্ক্রিপ্টে সংখ্যার মান নির্দিষ্ট করার জন্য আমরা সর্বনিম্ন একটি সিনট্যাক্স ব্যবহার করি। উদাহরণস্বরূপ, একটি integer নাম্বার নির্দিষ্ট করার জন্য আমরা একটি সাধারণ সংখ্যা লেখি। যেমন, let num = 10;। আবার, একটি float নাম্বার নির্দিষ্ট করার জন্য আমরা সংখ্যার দশমিকের পরে একটি সংখ্যা লেখি। যেমন, let floatNum = 10.5;।

// জাভাস্ক্রিপ্টে নাম্বারের মানের উপর নির্ভর করে ডেটা টাইপ নির্ধারণ হয়। যদি একটি সংখ্যার মান দশমিকসহ থাকে তবে সেটি ফ্লোট হিসেবে চিহ্নিত হবে। আর যদি দশমিকশূন্য হয় তবে সেটি ইন্টিজার হিসেবে চিহ্নিত হবে। উদাহরণস্বরূপ, 10 হল একটি integer আর 10.5 হল


const numbers = '2.5';
const str = parseFloat(numbers);
console.log(str);

const numb = '8';
const strs = parseInt(numb);
console.log(strs);

const num1 = 54;
const num2 = 5.2;
const isInt = Number.isInteger(num1);
console.log(isInt)

const isInst = Number.isInteger(num2);
console.log(isInst);

function isFloat(num){
  return (num) === num && num % 1 !== 0;
}

const issFloat = isFloat(num2);
console.log(issFloat)

let numbersse = 'Hellow' /2 ;
console.log(numbersse);

let result = Math.sqrt(-1);
console.log(result); 


console.log(isNaN("hello"));
console.log(isNaN(123)); 
console.log(isNaN(NaN));