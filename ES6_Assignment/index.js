console.log("Program 1");

const concatenateStrings = (...rest) => {
    let str = "";
    for(let i=0;i<rest.length;i++) str+=rest[i]+" ";

    return str;
}

console.log(concatenateStrings("Hello", "world", "!")); 
// Output: Hello world !

console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn.")); 
// Output: JavaScript is fun to learn.

console.log("\n");

console.log("Program 2");

const mergeArrays = (arr1,arr2) => [...arr1,...arr2];

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));
// Output: ["a", "b", "c", "d", "e"]

console.log("\n");

console.log("Program 3");

const concatenateWithSeparator = (seperator,...rest) => {
    let str = "";
    for(let i=0;i<rest.length;i++){
        str+=`${rest[i]}${i===rest.length-1?"":seperator}`;
    } 

    return str;
}

console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
// Output: apple-orange-banana 

console.log(concatenateWithSeparator(',', 'red', 'green', 'blue', 'yellow'));       
// Output: red, green, blue, yellow

console.log("\n");

console.log("Program 4");

const extractObjectValues = ({name,age})=> `Name: ${name}, Age: ${age}`;

console.log(extractObjectValues({ name: "Alice", age: 25 }));
// Output: Name: Alice, Age: 25

console.log(extractObjectValues({ name: "Bob", age: 30 }));
// Output: Name: Bob, Age: 30

console.log("\n");

console.log("Program 5");

const extractArrayValues = (arr)=> {

    const [a,b,c] = [...arr];

    return `Values: ${a}, ${b}, ${c}`;

}

console.log(extractArrayValues([1, 2, "Hello", 3]));
// Output: Values: 1, 2, Hello

console.log(extractArrayValues(["apple", "orange", "banana"]));
// Output: Values: apple, orange, banana

console.log("\n");

console.log("Program 6");

const extractNestedValues = (obj) => {
    const {data:{firstName,lastName,age}} = {...obj};

    return `${firstName} ${lastName} will be ${age+5} years old in five years.`
}

console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}));
// Output: Priya Gupta will be 25 years old in five years.

console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}));
// Output: John Doe will be 30 years old in five years.

console.log("\n");

console.log("Program 7");

const printInfo = (obj) => {
    const {name:{firstName,lastName},department} = {...obj};

    return `${firstName} ${lastName} works in ${department} department.`
}

console.log(printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" }));
// Output: John Doe works in IT department.

console.log(printInfo({ name: { firstName: "Alice", lastName: "Smith" }, department: "Legal" }));
// Output: Alice Smith works in Legal department.

console.log("\n");

console.log("Program 8");

const printUserDetails = (obj) => {
    const {name="Anonymous", username="anonymous",post="Hello World!"} = {...obj};

    return `${username} posted "${post}"`
}

console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }));
// Output: john posted "Hello this is John. I am from England."

console.log(printUserDetails({}));
// Output: anonymous posted "Hello World!"

console.log("\n");

console.log("Program 9");

const checkEvenOdd = (num) => `${num} is an ${num%2===0?"even":"odd"} number`

console.log(checkEvenOdd(8));  
// Output: 8 is an even number.

console.log(checkEvenOdd(15));
// Output: 15 is an odd number.

console.log("\n");

console.log("Program 10");

const checkDiscountEligibility = (amount,premium) => `You are eligible for a ${amount>100 && premium? 10:5}% discount`; 

console.log(checkDiscountEligibility(120, true));
// Output: You are eligible for a 10% discount. 

console.log(checkDiscountEligibility(90, false));
// Output: You are eligible for a 5% discount.

console.log("\n");

console.log("Program 11");

const mergeObj = (obj1,obj2) => ({...obj1,...obj2});
const object1 = { name: 'Alice', age: 30 }; 
const object2 = { city: 'London', country: 'UK' };

console.log(mergeObj(object1,object2));

console.log("\n");

console.log("Program 12");

const object = { name: 'Dave', age: 25 }; 

const addKeyValuePair = (obj,key,value) => ({...obj,[key]:value});

console.log(addKeyValuePair(object, 'city', 'New York')); 