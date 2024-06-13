let arr = [5 , 12, 7, 25, 18, 3];

console.log("Program 1:")

console.log(arr);

console.log("\n");

console.log("Program 2:")


for(let i=0;i<arr.length;i++){
    arr[i]+=10;
}

console.log(arr);

console.log("\n");

console.log("Program 3:")


for(let i=0;i<arr.length;i++){

    if(arr[i]%2!==0){
        arr[i]+=1;
    }

}

console.log(arr);

console.log("\n");

console.log("Program 4:")

let arr2 = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        arr2.push(arr[i])
    }
}

console.log(arr2);

console.log("\n");

console.log("Program 5:")

function printSumOfArray(){
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Sum ",sum);
}

printSumOfArray()

console.log("\n");

console.log("Program 6:")

function printEvenOddSumOfArray(){
    let evenSum=0;
    let oddSum = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0) evenSum+=arr[i];
    else oddSum+=arr[i];
}

console.log("Even Sum ",evenSum);
console.log("Odd Sum ",oddSum);
}

printEvenOddSumOfArray();
