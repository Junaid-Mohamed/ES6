console.log("Program 1");

const sumAndDifference = (arr) => {
    const [a,b] = [...arr];
    return {
        sum:a+b,
        Difference: a-b
    }
}

console.log(sumAndDifference([5, 3]));

console.log(sumAndDifference([10, 7]));

console.log("\n");

console.log("Program 2");

const extractFirstAndLast = (str) => ({"First Character": str.charAt(0),"Last Character": str.charAt(str.length-1) });

console.log(extractFirstAndLast("hello")); 

console.log(extractFirstAndLast("world"));

console.log("\n");

console.log("Program 3");

const calculateRectangleArea = (obj)=>{
    const {length,width} = {...obj};
    return length*width;
}
console.log(calculateRectangleArea({ length: 5, width: 3 })); // Output: The area of the rectangle is: 15

console.log(calculateRectangleArea({ length: 8, width: 4 })); // Output: The area of the rectangle is: 32

console.log("\n");

console.log("Program 4");

const getFirstTwoColors = (obj)=>{
    const {firstColor,secondColor} = {...obj};
    return `The first two colors are: ${firstColor} and ${secondColor}`;
}

console.log(getFirstTwoColors(["red", "blue", "green", "yellow"])); // Output: The first two colors are: red and blue

console.log(getFirstTwoColors(["orange", "purple", "pink"])); // Output: The first two colors are: orange and purple

console.log("\n");

console.log("Program 5");

const extractNestedInfo = (obj) => {
    const {data:{name,age,country}} = {...obj};
    return `${name} is ${age} years and lives in ${country}.`
}

console.log(extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } }));
// Output: John is 35 years old and lives in USA.

console.log(extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } }));
// Output: Emma is 28 years old and lives in Canada.

console.log("\n");

console.log("Program 6");

const productAndDifference = (arr) => {
    const [a,b,c] = [...arr];
    return `Product and Difference: ${(a*b)-c}`
}

console.log(productAndDifference([5, 3, 5, 6])); // Output: Product and Difference: 10

console.log(productAndDifference([10, 7, 35, 30])); // Output: Product and Difference: 35

console.log("\n");

console.log("Program 7");

const extractData = (obj)=>{

    const {product:{itemName,description,manufacturingCountry}} = {...obj};

    return `Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;

}

console.log(extractData({ id: 1, product: { itemName: "Pencil", description: "Extra Dark Pencil", manufacturingCountry: "USA" } }));
// Output: Item name: Pencil, Description: Extra Dark Pencil, Manufacturing Country: USA

console.log(extractData({ id: 2, product: { itemName: "Sharpener", description: "Faber Castell Premium", manufacturingCountry: "Germany" } }));
// Output: Item name: Sharpener, Description: Faber Castell Premium, Manufacturing Country: Germany
