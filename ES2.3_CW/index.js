// arrow functoin that takes a string and return an object.

const createStringObject = str => ({text:str});
console.log(createStringObject("Hi World"));

// arrow functoin that takes a string and return an object with sum and product of those numbers.

const calculateSumAndProduct = (a,b) => ({Sum:a+b, product: a*b});
console.log(calculateSumAndProduct(2,3));

// arrow functoin that takes a string and return an object with sum and product of those numbers.

const createPersonObject = (name,age) => ({name:name,age:age});
console.log(createPersonObject("Junaid",25));