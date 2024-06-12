const isBirthday = true;
// your code here

let age = 25;
if(isBirthday) age++;

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

// your code here
console.log("Program 2:");

let passengerAge = 65;
let ticketPrice = 300;
let discountedPrice = 0;

if (passengerAge > 60) {
    discountedPrice = ticketPrice - (ticketPrice*0.15)
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
  } else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
  }
  console.log("\n");

  console.log("Program 3:");

  const num1=10;
  const num2 = 20;
  const num3 = 15;

  if(num3 > num1 && num3 > num2){
    console.log(`The third number ${num3} is the largest.`);
  }
  else{
    console.log(`The third number ${num3} is not the largest.`);
  }
  console.log("\n");
  console.log("Program 4:");

  const shoppingCart = [
    {
        item: "Saree",
        price: 500
    },
    {
        item: "Kurta",
        price: 300
    },
    {
        item: "Jeans",
        price: 900
    },
    {
        item: "Shoes",
        price: 400
    }
  ]

let totalCartPrice = 0;
console.log(`
Shopping Cart:
--------------------------------------------`)
for(let i=0;i<shoppingCart.length;i++){
    totalCartPrice+=shoppingCart[i].price;
    console.log(`Item: ${shoppingCart[i].item}, Price: ${shoppingCart[i].price}`)
  }
console.log(`--------------------------------
Delivery Charges: ${totalCartPrice<1999?'99 Delivery Charge':'No Delivery Charge'}
--------------------------------------------
Total Cart Price: ${totalCartPrice}`)

console.log("\n");

console.log("Program 5:")

const number = 5;

if(number>0){
    console.log("number is positive")
}
else if(number < 0){
    console.log("number is negative")
}
else{
    console.log("number is zero")
}

console.log("\n");

console.log("Program 6:")

const marks1 = 85
const marks2 = 90
const marks3 = 78

const student1 = "Rahul"
const student2 = "Priya"
const student3 = "Tina"

if(marks1>marks2 && marks1 > marks3){
    console.log(`${student1} has the highest marks: ${marks1}`);
}
else if(marks2>marks3 && marks2 > marks1){
    console.log(`${student2} has the highest marks: ${marks2}`);
}
else{
    console.log(`${student3} has the highest marks: ${marks3}`);
}