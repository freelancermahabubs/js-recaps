const numbers = [455, 144, 255, 894, 12];
for(const number of numbers){
  console.log(number)
};

const obj = {
  name: 'mahabub',
  age: 21,
  occupation: 'developer',
};
for(property in obj){
  console.log(`${property}: ${obj[property]}`)
};

const totn_colors = { primary: 'blue', secondary: 'gray', tertiary: 'white' };

for(const color in totn_colors){
  console.log(color)
}
