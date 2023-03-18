const numbers = [4, 8, 9, 2, 52];
const sum = numbers.reduce((accumulator, currentValue) => {
return accumulator * currentValue;
}, 1);
console.log(sum)