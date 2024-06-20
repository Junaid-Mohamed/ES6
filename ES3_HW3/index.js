console.log("Program 1");

const copyAndAppend = (arr,element) => [...arr,element]; 

console.log(copyAndAppend(["apple", "orange"], "banana"));

console.log("\n");

console.log("Program 2");

const copyAndAdd = (arr,ele) => [...arr,ele];

console.log(copyAndAdd([10, 20], 30));

console.log("\n");

console.log("Program 3");

const mergeArrays = (arr1,arr2) => [...arr1,...arr2];

console.log(mergeArrays([10, 20], [30, 40, 50]));

console.log("\n");

console.log("Program 4");

const mergeNameArrays = (arr1,arr2) => [...arr1,...arr2];

console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

console.log("\n");

console.log("Program 5");

const copyPersonObject = (obj,key,value) => ({...obj,[key]:value});
console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "Johnson"))

console.log("\n");

console.log("Program 6");

const copyEmployeeObject = (obj,key,value) => ({...obj,[key]:value});
console.log(copyEmployeeObject({employeeId: 243, name: "Bob", age: 20}, "department", "IT department"))

console.log("\n");

console.log("Program 7");

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

console.log(mergeObjects({ x: "hello" }, { y: "world" }));

console.log("\n");

console.log("Program 8");

const modifyObjectProperties = (obj1,obj2) => ({...obj1,...obj2});

console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })); // this is new... if same key is present if you merged the objects the updated value from right it is taking that.

console.log(modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" }));

console.log("\n");

console.log("Program 9");

const mergeObject = (obj1,obj2) => ({...obj1,...obj2});

console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }

console.log("\n");

console.log("Program 10");

const mergeThreeArrays = (arr1,arr2,arr3) => [...arr1,...arr2,...arr3];

console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

console.log("\n");

console.log("Program 11");

const mergeThreeArray = (arr1,arr2,arr3) => [...arr1,...arr2,...arr3];

console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));