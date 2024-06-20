//  destructuring

//  to extract elements from an array.

const extractArrayValues = (arr) => {
    const [first,second,third] = arr;
    console.log(first);
    console.log(second);
    console.log(third);
}

extractArrayValues([1,2,3]);

//  extract values from an Object

const extractValuesFromObj = (obj) => {
    const {name,age,city} = obj;

    console.log(`${name} is ${age} years old and lives in ${city}`);
}

extractValuesFromObj({name:"Alice",age:25,city:"Paris"})

// extract values from nested object.

const obj1 = {
    id:1,
    info:{
        title:"Javascript Basics",
        description: "Learn Fundamentals"
    }
}

const getObjValues = (obj) => {
    const {info : {title,description}} = obj;

    console.log(title);
    console.log(description);

}

getObjValues(obj1);