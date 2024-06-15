// Arrow function with no params
// arrow function to generate random numbers from 1 to 10

const generateRandomNumber = () => Math.floor(Math.random() * 10);

console.log(generateRandomNumber());

// arrow function to return current date

const generateCurrentDate = () => new Date().toLocaleDateString()
console.log(generateCurrentDate);

//  arrow function that return a string

const getGreeting = ()=> "Hello, Welcome to neoG Camp!."
console.log(getGreeting());

// Arrow function with one params

//  arrow function to get square of num
// ** for power value is new learnt.
const getSquareValue = (num)=> num**2;
