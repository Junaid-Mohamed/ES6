/**
 * Write an arrow function that checks if a number is odd.
 */
console.log("program 1");

const isOdd=(a)=> a%2!==0;
console.log(isOdd(3));

console.log("\n");

/**
 * Write an arrow function that calculates the length of a string. Print the length
 */
console.log("program 2");

const calLength = str => str.length;
console.log(calLength("Junaid"));
console.log("\n");

/**
 * Write an arrow function that capitalizes a given string
 */
console.log("program 3");

const strUpperCase = str => str.toUpperCase();
console.log(strUpperCase("Junaid"))

console.log("\n");

/**
 * Write an arrow function that returns the current date in MM/DD/YYYY format..
 */
console.log("program 4");

const formatDate = () => {
    const date = new Date();
    const month = (date.getMonth()+1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`
}

console.log(formatDate())
console.log("\n");

/**
 * Write an arrow function that returns the current time in HH:MM:SS format
 */
console.log("program 5");

const formatTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    return `${hours}:${minutes}:${seconds}`;
}

console.log(formatTime())

console.log("\n");

/**
 * Write an arrow function that converts Fahrenheit to Celsius
 */
console.log("program 6");

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
console.log(fahrenheitToCelsius(60))

console.log("\n");

/**
 * Write an arrow function that checks if a given string is empty.
 */
console.log("program 7");

const isEmptyString = (str) => str.length === 0; 

console.log(isEmptyString("Hello"))
console.log(isEmptyString(""))

console.log("\n");

/**
 * Write an arrow function that returns a random number between 1 and 30
 */
console.log("program 8");

const generateRandomNumber = () => Math.floor(Math.random() * 30)+1;
console.log(generateRandomNumber());
console.log("\n");

/**
 * Write an arrow function that returns the square root of a random number between 1 and 100
 */
console.log("program 9");

const getRandomSquareRoot = () => Math.sqrt(Math.floor(Math.random()*100)+1);
console.log(getRandomSquareRoot());
console.log("\n");

/**
 *  Write an arrow function that changes a given string in lower case
 */
console.log("program 10");

const strLowerCase = str => str.toLowerCase();
console.log(strLowerCase("WORLD"))

console.log("\n");