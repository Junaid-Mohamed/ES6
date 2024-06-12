
console.log("Program 1:")
function calculateSalary(hoursWorked,hourlyRate){

    let totalSalary = hoursWorked*hourlyRate;
    return totalSalary;

}

console.log(`Total salary with 5 hours worked and 500 hourly rate: ${calculateSalary(5,500)}`)
console.log("\n");

console.log("Program 2:")

function calculateBonus(workedHours,marks,salary){

    let bonus=0;
    if(workedHours > 25 && marks > 85){
        bonus = salary*0.1
        return salary+bonus;
    }
    else if(workedHours > 15 && marks > 75){
        bonus = salary*0.05
        return salary+bonus;
    }
    
    return salary;

}

console.log(`Salary: `,calculateBonus(20, 80, 5000));
console.log("\n");

console.log("Program 3:")

function calculateFinalAmount (price1,quantity1,price2,quantity2){
    
    let totalPrice1 = price1*quantity1;
    let totalPrice2 = price2*quantity2;
    finalPrice = totalPrice1+totalPrice2
}

console.log("Total Price: ",calculateFinalAmount(200,10,500,5));
console.log("\n");

console.log("Program 4:")

function calculateAllowance (age,isStudent,baseAllowance){

    let updatedBaseAllowance = 0;

    if(age<18 && isStudent){
        updatedBaseAllowance = baseAllowance+100;
        return updatedBaseAllowance;
    }
    else if((age>=18 && age<=25) && isStudent){
            updatedBaseAllowance = baseAllowance+50;
            return updatedBaseAllowance;
        }
    
        return baseAllowance;
}

console.log("Base Allowance ",calculateAllowance(16,true,500));

console.log("\n");
console.log("Program 5:")

function calculateShippingCost (totalWeight,country,baseCost){
    let updatedBaseCost=0;

    if(totalWeight < 1 && country === "Local") {
        updatedBaseCost = baseCost+10;
        return updatedBaseCost;
    }
    else if(totalWeight > 1 && country === "International"){
        updatedBaseCost = baseCost+20;
        return updatedBaseCost;
    }
    return baseCost;
}

console.log("Base cost: ",calculateShippingCost(0.5,"Local",50));