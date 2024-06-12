let a = 2;

if(true){
    console.log(a);
}

console.log(a);

//  let and const are block scope.

let num = 100;

if(true){
    console.log(num);
}

console.log(num);

function printNum(){
    // console.log(num) // this will throw error reference error
    let num = 40  // const also same
    console.log(num)

    if(true){
        let num = 50; // const also same
        console.log(num);
    }

    console.log(num)
}

console.log(num);
printNum();

let num1 = 10;

if(true){
    num1=20;
    console.log(num1);
}

console.log(num1);

let name;
console.log(name);
name='Junaid';

// another way to declare variables using var

console.log(name1);
var name1 = "Joe";