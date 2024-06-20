console.log("Program 1");

const createObjectWithDynamicField = (key,value) => ({[key]:value});

console.log(createObjectWithDynamicField("name", "Alice"));
// Output: { name: "Alice" }

console.log(createObjectWithDynamicField("age", 25));
// Output: { age: 25 }

console.log("\n");

console.log("Program 2");

const addObjectField = (obj,key,value) => ({...obj,[key]:value});

console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));
// Output: { name: "Bob", age: 30, city: "New York" }

console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));
// Output: { fruit: "apple", color: "red", quantity: 3 }

console.log("\n");

console.log("Program 3");

const addObjField = (obj,key,value) => ({...obj,[key]:value});

console.log(addObjField({ productName: "Side Table", color: "Walnut Brown" }, "inStock", true));
// Output: {productName: "Side Table", color: "Walnut Brown", inStock: true}

console.log(addObjField({ productName: "Dining Table", color: "White" }, "inStock", false));
// Output: {productName: "Dining Table", color: "White", inStock: false}

console.log("\n");

console.log("Program 4");

const updateObjectField = (obj,key,value) => ({...obj,[key]:value});

console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
// Output: {name: "Charlie", age: 29 }

console.log(updateObjectField({ city: "Paris", country: "France" }, "country", "Spain"));
// Output: {city: "Paris", country: "Spain" }

console.log("\n");

console.log("Program 5");

const updateProductObject = (obj,key,value) => ({...obj,[key]:value});

console.log(updateProductObject({ productName: "Side Table", inStock: true}, "inStock", false));
// Output: {productName: "Side Table", inStock: false }

console.log(updateProductObject({ productName: "Dining Table", color: "White", inStock: false}, "inStock", true));
// Output: {productName: "Dining Table", color: "White", inStock: true}

console.log("\n");

console.log("Program 6");

const generateObject = (key1,value1,key2,value2) => ({[key1]:value1,[key2]:value2}); // is this correct? please check the solution once.

console.log(generateObject("animal", "Dog", "sound", "Bark"));
// Output: { animal: "Dog", sound: "Bark" }

console.log(generateObject("fruit", "Banana", "color", "Yellow"));
// Output: { fruit: "Banana", color: "Yellow" }

console.log("\n");

console.log("Program 7");

const generateObj = (key1,value1,key2,value2,key3,value3) => ({[key1]:value1,[key2]:value2,[key3]:value3});

console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"));
// Output: { mealType: "Lunch", meal: "Rice-Dal", calorie: "200 Cal" }

console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));
// Output: { mealType: "Dinner", meal: "Chapati-Dal", calorie: "180 Cal" }

console.log("\n");

console.log("Program 8");

const createNewObjectWithDynamicField = (key1,value1,key2,value2,key3,value3) => ({[key1]:value1,[key2]:value2,[key3]:value3});

console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
// Output: { name: "Maze", favColor: "Pink", isMarried: false }

console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));
// Output: { age: 35, hobby: "Cooking", isMarried: true }