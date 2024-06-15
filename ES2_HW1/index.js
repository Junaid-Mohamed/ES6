/**
 * Write an arrow function with two parameters that calculates the area of a rectangle.
 */

console.log("program 1");

const areaOfRectangle = (width,length)=> width*length;
console.log(areaOfRectangle(2,3));
console.log("\n");

/**
 *  Write an arrow function with two parameters 15 and 5, that checks if the first number is divisible by the second number.
 */

console.log("program 2");

const isDivisible = (a,b) => a%b===0
console.log(isDivisible(15,5));
console.log("\n");

/**
 *  Write an arrow function with two parameters 15 and 5, that calculates the difference of the two numbers.
 */

console.log("program 3");

const calculateDiff = (a,b)=> a-b;
console.log(calculateDiff(15,5));

console.log("\n");

/**
 * Write an arrow function with three parameters that concatenates three strings. Your Output should be: I am happy.
 */

console.log("program 4");

const concatStrings = (str1,str2,str3) => str1+" "+str2+" "+str3;
console.log(concatStrings("Hi","User","Welcome to NeoG Camp!!")); 

console.log("\n");

/**
 * convert arrow function to traditional function
 */

console.log("program 5");

function isBigger(a,b){
    if(a>b){
        return true
    }
    else{
        return false
    }
}
console.log("Is 2 bigger than 3?", isBigger(2, 3))

console.log("\n");

/**
 * convert tradional function to arrow function 
 */

console.log("program 6");

const printProduct = (a,b) => a*b;
console.log("Product of two numbers: ", printProduct(2, 6));

console.log("\n");

/**
 * convert arrow function
 */
console.log("program 7");

const getGreeting=(greeting,name)=> greeting+" "+name;
console.log(getGreeting("Hello","John"));

console.log("\n");