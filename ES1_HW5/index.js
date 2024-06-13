let students = [
    {
        "name":"Rahul",
        "rollNo":101,
        "hindi":80,
        "english":75,
        "maths":90
    },
    {
        "name":"Amit",
        "rollNo":102,
        "hindi":85,
        "english":70,
        "maths":95
    },
    {
        "name":"Priya",
        "rollNo":103,
        "hindi":78,
        "english":92,
        "maths":87
    }

]

const marksForComputer = [88, 92, 95]

for(let i=0;i<marksForComputer.length;i++){
    students[i].computer = marksForComputer[i];
}

console.log(`1.1 Student Data with Computer Marks`)
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}`)
}
console.log("\n");
const marksForScience = [82, 90, 88];

for(let i=0;i<marksForScience.length;i++){
    students[i].science = marksForScience[i];
}

console.log(`1.2 Student Data with Science Marks`)
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}, Science: ${students[i].science} `)
}
console.log("\n");
// Q2.

const Kaveri = {
    "name":"Kaveri",
        "rollNo":"104",
        "hindi":84,
        "english":88,
        "maths":78,
        "computer":90,
        "science":86
}

console.log(`2.1 Kaveri's Data
${JSON.stringify(Kaveri)}`)
console.log("\n");
students.push(Kaveri);
console.log(`2.2 Updated Students Data with Kaveri`)
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}, Science: ${students[i].science} `)
}
console.log("\n");
for(let i=0;i<students.length;i++){
    let totalMarks = 0;
    totalMarks = students[i].hindi+students[i].english+students[i].maths+students[i].computer+students[i].science;
    students[i].totalMarks = totalMarks;
}

console.log(`2.3 Updated Students Data with Total Marks`)
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Total Marks: ${students[i].totalMarks} `);
}
console.log("\n");
for(let i=0;i<students.length;i++){
    let avgMarks = 0;
    avgMarks = students[i].totalMarks/5;
    students[i].avgMarks = avgMarks;
}
console.log("\n");
console.log(`2.4 Updated Students Data with Average Marks`)
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Average Marks: ${students[i].avgMarks} `);
}

function calculateGrade(avgMarks){
    if(avgMarks>=90 && avgMarks<100) return "A";
    else if(avgMarks>=80 && avgMarks<90) return "B";
    else if(avgMarks>=70 && avgMarks<80) return "B";
    else if(avgMarks>=60 && avgMarks<70) return "B";
    else if(avgMarks>=50 && avgMarks<60) return "B";
    else return "F"
}

function printReportCard(student){

    console.log(`
    ==== Report Card for ${student.name} ====
    Roll No. : ${student.rollNo}
    ------
    Marks
    ------
    Hindi: ${student.hindi}
    English: ${student.english}
    Maths: ${student.maths}
    Computer: ${student.computer}
    Science: ${student.science}
    ------
    Total: ${student.totalMarks}
    Average: ${student.avgMarks}
    Grade: ${calculateGrade(student.avgMarks)}
    `)
}

for(let i=0;i<students.length;i++){
    printReportCard(students[i]);
}