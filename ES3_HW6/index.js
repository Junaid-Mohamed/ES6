console.log("Program 1");

const printTemperature = ({location:loc,temperature:temp}) => {
    return `Location: ${loc}, Temperature: ${temp} degree celsius`;
}

console.log(printTemperature({ location: "New York", temperature: 15 }));
// Output: Location: New York, Temperature: 15 degree celsius

console.log(printTemperature({ location: "London", temperature: 10 }));
// Output: Location: London, Temperature: 10 degree celsius

console.log("\n");

console.log("Program 2");

const printFruit = ({fruitName:name,fruitColor:color,inStock}) => {
    return `Fruit Name: ${name}, Fruit Color: ${color}, Available: ${inStock}`;
}

console.log(printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true }));
// Output: Fruit Name: Apple, Fruit Color: Red, Available: true

console.log(printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false }));
// Output: Fruit Name: Grapes, Fruit Color: Green, Available: false

console.log("\n");

console.log("Program 3");

const printStudentScores = ([name, ...rest]) =>{
    return `Student: ${name}, Scores: ${rest}`;
}

console.log(printStudentScores(["Alice", 90, 85, 95]));
// Output: Student: Alice, Scores: 90, 85, 95

console.log(printStudentScores(["Bob", 80, 75, 85]));
// Output: Student: Bob, Scores: 80, 75, 85

console.log("\n");

console.log("Program 4");

const printProductDetails = ({name:product,price})=>{
    return `Product: ${product}, Price: $${price}`;
}

console.log(printProductDetails({ name: "Laptop", price: 899 }));
// Output: Product: Laptop, Price: $899

console.log(printProductDetails({ name: "Phone", price: 599 }));
// Output: Product: Phone, Price: $599

console.log("\n");

console.log("Program 5");

const printPersonDetails = ({name:personName="Anonymous",age:personAge="Unknown"}) =>{
    return `Name: ${personName}, Age: ${personAge}`;
}

console.log(printPersonDetails({ name: "John", age: 30 }));
// Output: Name: John, Age: 30

console.log(printPersonDetails({}));
// Output: Name: Anonymous, Age: Unknown

console.log("\n");

console.log("Program 6");

const printCityPopulation = ([city,{population:pop,country}]) =>{
    return `City: ${city}, Population: ${pop}, Country: ${country}`;
}

console.log(printCityPopulation(["New York", { population: 8623000, country: "USA" }]));
// Output: City: New York, Population: 8623000, Country: USA

console.log(printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }]));
// Output: City: Tokyo, Population: 37833000, Country: Japan

console.log("\n");

console.log("Program 7");

const printCarDetails = ([name,{model:mod,price}]) =>{
    return `Name: ${name}, Model: ${mod}, Price: Rs. ${price}`;
}

console.log(printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]));
// Output: Name: All-Terrain SUV, Model: SUV, Price: Rs. 4500000

console.log(printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]));
// Output: Name: GreenDrive Electric, Model: Electric, Price: Rs. 500000
