// spread operators

//  duplicate an array

let numbersArr = [1,2,3];

// let newNumbersArr = numbersArr;

let newNumbersArr = [...numbersArr]; // this won't modify the original array.

newNumbersArr.push(4);

console.log(`Old array ${numbersArr}`);
console.log(`New array : ${newNumbersArr}`);

const duplicateArray = (arr) => [...arr];

console.log(duplicateArray(["apple","banana"]));

const addnewElement = (arr,element) => [...arr,element];

console.log(addnewElement(["Kiwi","Orange"],"Apple"));

//  combining two arrays

const combineArray = (arr1,arr2) => [...arr1,...arr2];

console.log(combineArray([11,12,13],[14,15,16]));


//  copying an array of objects, and then adding a property to an object

const copyObject = (obj,key,value) => ({...obj,[key]:value});

console.log(copyObject({name:"Alice",age:20},"favVolor","blue"));


