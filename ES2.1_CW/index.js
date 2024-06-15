// traditional way

function add(a,b){
    return a+b;
}

console.log(add(5,10));


// ES6 way - Arrow function

const addition = (a,b)=> a+b;

console.log(addition(4,10));

// multiply 2 numbers

const multiply = (a,b) => a*b;
console.log(multiply(2,5));

// concat 2 strings

const concatStrings = (str1,str2) => str1+" "+str2;
console.log(concatStrings("Hi","World"));