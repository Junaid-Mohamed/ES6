console.log("Program 1");

const logFirstAndRest = (a, ...rest) => {
    console.log(`First: ${a}`);
    console.log(`Rest: ${rest}`);
}

logFirstAndRest(1, 2, 3, 4, 5)

console.log("\n");

console.log("Program 2");

const logFirstAndSecond = (a,b, ...rest) => {
    console.log(`First: ${a}`);
    console.log(`Second: ${b}`);
    console.log(`Rest: ${rest}`);
}

logFirstAndSecond(12, 22, 33, 44, 55)

console.log("\n");

console.log("Program 3");

const calculateProduct = (...rest) => {
    let product = 1;
    for(let i=0;i<rest.length;i++){
        product*=rest[i];
    }
    return product
}

console.log(calculateProduct(2, 3, 4)); // Output: 24
console.log(calculateProduct(5, 2, 1, 3)); // Output: 30

console.log("\n");

console.log("Program 4");

const createSentence = (...rest) => rest.join(" ");

console.log(createSentence("JavaScript", "is", "awesome"));

console.log("\n");

console.log("Program 5");

const findSum = (str, ...rest) => {
    let sum = 0;
    for(let i=0;i<rest.length;i++){
        sum+=rest[i];
    }
    console.log(str,sum);
}

findSum("Sum of Numbers: ", 2, 4, 6, 8, 10); 

console.log("\n");

console.log("Program 6");

const containsValue = (a,...rest) => rest.includes(a);

console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
console.log(containsValue("apple", "banana", "orange")); // Output: false

console.log("\n");

console.log("Program 7");

const calculateAverage = (...rest) =>{
    let totalSum = 0;
    for(let i=0;i<rest.length;i++){
        totalSum+=rest[i];
    }

    return totalSum/rest.length;
}

console.log(calculateAverage(10, 5, 15)); // Output: 10
console.log(calculateAverage(2, 4, 6, 8)); // Output: 5