console.log("Program 1");

const createPerson = (name,age) => ({name,age});

console.log(createPerson("Alice", 25)); // Output: { name: "Alice", age: 25 }

console.log(createPerson("Bob", 30)); // Output: { name: "Bob", age: 30 }

console.log("\n");

console.log("Program 2");

const createFruit = (name="Apple",color="Red") => ({name,color});

console.log(createFruit()); // Output: { name: "Apple", color: "Red" }

console.log(createFruit("Banana", "Yellow")); // Output: { name: "Banana", color: "Yellow" }

console.log("\n");

console.log("Program 3");

const createBookObj = (title,author,genre) => ({title,author,genre});

console.log(createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic"));
// Output: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" }

console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"));
// Output: { title: "The Beatles Anthology", author: "The Beatles", genre: "Music" }

console.log("\n");

console.log("Program 4");

const createBook = (bookName="The Hitchhiker's Guide to the Galaxy",author="Douglas Adams") => ({bookName,author})

console.log(createBook());
// Output: { bookName: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" }

console.log(createBook("A Suitable Boy", "Vikram Seth"));
// Output: { bookName: "A Suitable Boy", author: "Vikram Seth" }

console.log("\n");

console.log("Program 5");

let aaloo = 1;
let bhaaloo = 2;

const createObj = (aaloo,bhaaloo)=>({aaloo,bhaaloo})

console.log(createObj());

console.log("\n");

console.log("Program 6");

const calculateArea = (length,width) => ({length,width,area:length*width});

console.log(calculateArea(5, 8));

console.log("\n");

console.log("Program 7");

const printObjOfArrays = (arr1,arr2) => ({arr1:[...arr1],arr2: [...arr2]})

console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));

console.log("\n");

console.log("Program 8");

const createTriangle = (side1,side2,side3) => ({side1,side2,side3,perimeter: side1+side2+side3});

console.log(createTriangle(3, 4, 5));

console.log("\n");

console.log("Program 9");

const createPoint = (x,y)=> ({x,y});

console.log(createPoint(3, 7));

console.log("\n");

console.log("Program 10");

const createEmail = (username,domain)=> ({username,domain,fullAddress:`${username}@${domain}`})

console.log(createEmail("john.doe", "example.com"));