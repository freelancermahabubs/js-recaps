function addNumbers( num1, num2){
return num1 + num2
};
console.log(addNumbers(45, 45))

function multiplication (numbers1, numbers2){
  const reslut = numbers1 * numbers2;
  return reslut
}
const multiplications = multiplication(45, 12);
console.log(multiplications)

function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  else{
    return false
  }
}
console.log(isEven(45));

function defaultPerametar(name = 'World'){
  console.log(`Hello: ${name}`);
}

defaultPerametar()
defaultPerametar('Alica')