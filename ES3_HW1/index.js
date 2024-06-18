console.log(`Program 1`);
const rectangleArea = (a=3,b=5) => a*b;

console.log(rectangleArea()); // Output: 15

console.log(rectangleArea(4)); // Output: 12

console.log("\n")
console.log(`Program 2`);

const concatenateStrings = (str1 = "Hi ",str2= "neoG") => str1+str2;

console.log(concatenateStrings("Hello ", "World")); // Output: HelloWorld

console.log(concatenateStrings("Hello ")); // Output: Hello neoG

console.log("\n")
console.log(`Program 3`);

const cylinderVolume = (radius=2,height=4) => Math.PI*radius**2*height; 

console.log(cylinderVolume(3)) // Output: 113.09733552923255

console.log(cylinderVolume(3, 5)) // Output: 141.3716694115407

console.log("\n")
console.log(`Program 4`);

const shoppingCartTotal = (price=0,quantity=1) => price*quantity;

console.log(shoppingCartTotal(10)); // Output: 10 

console.log(shoppingCartTotal(15, 3)); // Output: 45

console.log(shoppingCartTotal()); // Output: 0

console.log("\n")
console.log(`Program 5`);

const generateUserProfile = (userName="Guest", age= 25, country= "Unknown") => ({UserName:userName,Age:age,Country:country});

console.log(generateUserProfile()); // Output: Username: Guest, Age: 25, Country: Unknown 

console.log(generateUserProfile("Alice", 30, "USA")); // Output: Username: Alice, Age: 30, Country: USA

console.log("\n")
console.log(`Program 6`);

const sum = (a,b=5) => a+b;

console.log(sum(2, 4)); // Output: 6
console.log(sum(3)); // Output: 8

console.log("\n")
console.log(`Program 7`);

const calculatePower = (base=1,exponent=1) => Math.pow(base,exponent);

console.log(calculatePower(2, 3)); // Output: 8

console.log(calculatePower(5)); // Output: 5

console.log("\n")
console.log(`Program 8`);

const triangleArea = (base=1,height=1) => 0.5*base*height;

console.log(triangleArea(5)); // Output: 10 
console.log(triangleArea(3, 6)); // Output: 9

console.log("\n")
console.log(`Program 9`);

const concatenateStrings1 = (str1= " World",str2="") => str1 + str2;

console.log(concatenateStrings1("Good"));