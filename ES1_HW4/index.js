console.log("Program 1")
let car = {
    "brand":"Maruthi",
    "model":"Swift"
}

console.log(`1.1: ${car.brand}`)
console.log(`1.2: ${car.model}`)
car.model="Honda";
console.log(`1.4: ${JSON.stringify(car)}`)
car.year = "2022";
car.color = "blue";
console.log(`1.6: Properties of the 'Car' Object`);

for(let key in car){
    console.log(`${key} : ${car[key]}`);
}
console.log("\n");

console.log("Program 2")

let citizen = {
    "name":"Ramesh Kumar",
    "age":68,
    "occupation":"Retired"
}

console.log(`2.1: Updated age: ${citizen.age}`)
citizen.age = citizen.age+2;
console.log(`2.2: Updated age after adding 2: ${citizen.age}`)
citizen.city="Delhi";
console.log(`2.3: Properties of the 'Car' Object`);

for(let key in citizen){
    console.log(`${key} : ${citizen[key]}`);
}

console.log("\n");

console.log("Program 3")

let person = {
    "name":"Joe",
    "age":23
}

person.bp="Normal";

if(person.age<60 && person.bp === "Normal"){
    console.log(`Fit to travel`);
}
else {
    console.log(`Not Fit to travel`);
}