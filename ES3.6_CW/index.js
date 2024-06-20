// shorthand

let personName = "Maze"
let age = 20

const obj = {
    personName: personName,
    age: age
}

const obj1 = {personName,age};


const createperson = (personName,age)=>{
    return {personName,age};
}

console.log(createperson(personName,age));