let x = 1;
let y = 2;
if(x > y){
  console.log(true)
}
else{
  console.log(false)
};

if(x < y){
  console.log('tui small');
}
else{
  console.log('tui Bro')
};

if(x >= y){
  console.log(x, 'Bro otoba =')
}
else{
  console.log(y, 'borona')
};

if(x <= y){
  console.log(true)
}
else{
  console.log(false)
};

if(x == y){
  console.log(true)
}else{
  console.log("y is", false)
};

const student1 = 'mahabub';
const student2 = 'mahabub';
// if(student1 != student2){
//   console.log(student1, true)
// }
// else{
//   console.log(student2, false)
// };

if(student1 === student2){
  console.log(student1, true);
}
else{
  console.log(student2, false)
};

console.log(1 !== 1);
console.log('hello' !== 'hello');
console.log('1' !==  1);
console.log(0 !== false);


const numbers1 = 45;
const numbers2 = 48;

if(numbers1 > 50 && numbers2 < 50){
  console.log('kaj koro')
}
else{
console.log('kaj korona')
};

if(numbers1 > 12 || numbers2 <50){
  console.log('tore kaia falbo')
}
else{
  console.log('tore nasabo')
};

let number = 7;
if(number >= 0 && number <= 5) {
  console.log("খারাপ");
} else if(number >= 6 && number <= 10) {
  console.log("মাঝারি");
} else {
  console.log("ভালো");
};

let score = 70;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let cleanliness = 8; // সবচেয়ে স্বচ্ছতা ৮ পরিমাণে গণ্য হবে
let performance = 7; // নিজস্ব কাজ সম্পন্নতা ৭ পরিমাণে গণ্য হবে
let timeManagement = 6; // উত্তরপ্রদানের সময়সীমা ৬ পরিমাণে গণ্য হবে
let examTime = 120; // পরীক্ষার জন্য দেয়া সময় ১২০ মিনিট পরিমাণে গণ্য হবে

let grade;

if (cleanliness >= 8 && performance >= 8 && timeManagement >= 8 && examTime >= 180) {
  grade = 'A+';
} else if (cleanliness >= 7 && performance >= 7 && timeManagement >= 7 && examTime >= 150) {
  grade = 'A';
} else if (cleanliness >= 6 && performance >= 6 && timeManagement >= 6 && examTime >= 120) {
  grade = 'B';
} else {
  grade = 'Fail';
}

console.log('Grade:', grade);

