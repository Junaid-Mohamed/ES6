console.log('Program 1');
const person = (fName,lName)=> ({firstName:fName, lastName:lName});
console.log(person("Mohammed","Junaid"));
console.log("\n");
console.log('Program 2');
const strObject = (str) => ({length: str.length, uppercase: str.toUpperCase()});
console.log(strObject("Junaid"));
console.log("\n");
console.log('Program 3');
const personObject = (fName,lName,age,phoneNumber) => ({
    fullName: fName +" "+lName,
    age: age,
    phoneNumber: phoneNumber
});
console.log(personObject("Mohammed","Junaid",25,"9902xxxx77"));
console.log("\n");
console.log('Program 4');
const concatObject = (str1,str2) => ({concatenation: str1+" "+str2,charCount: (str1+str2).length})
console.log(concatObject("Hello","World"));
console.log("\n");
console.log('Program 5');
const calculateCircleProperties = (radius) => ({circumference: 2*Math.PI*radius, area: Math.PI * (radius ** 2)});
console.log(calculateCircleProperties(5));
console.log("\n");
console.log('Program 6');
const calculateDifferenceAndQuotient = (a,b) => ({ difference: a-b, quotient: a/b});
console.log(calculateDifferenceAndQuotient(10,2));
console.log("\n");
console.log('Program 7');
const wordCount = (str) => ({wordCount: str.split("").length});
console.log(wordCount("Javascript is fun"));
console.log("\n");
console.log('Program 8');
const calculateSquareAndCube = (a) => ({sqaure: a*a, cube: a*a*a});
console.log(calculateSquareAndCube(4));
console.log("\n");
console.log('Program 9');
const checkNumber = (num) =>({isPositive: num>0 , isNegative: num<0 });
console.log(checkNumber(-7));
console.log(checkNumber(5));