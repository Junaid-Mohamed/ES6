console.log("program 1");

const calculateAverage = (arr) =>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calculateAverage([5,10,15]))
console.log("\n");

console.log("program 2");

const reverseString = (str) =>{

    let reverseStr = "";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }

    return reverseStr;

}

console.log(reverseString("world"));

console.log("\n");

console.log("program 3");

const findLongestWord = (arr) => {
    let longestWord = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i].length> longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["apple", "banana", "grapefruit"]));

console.log("\n");

console.log("program 4");

const calculateStringLength = (str) => {
    let len = 0;
    for(let i=0; i<str.length; i++){
        len++;
    }
    return len;
}

console.log(calculateStringLength("hello"));

console.log("\n");

const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 88 }
  ];

  console.log("program 5.1");

  const calculateAverageGrade = (students) => {
    let avgGrade = 0;
    for(let i=0;i<students.length;i++){
        avgGrade+=students[i].grade;
    }
    return avgGrade/students.length;
  }
  console.log("Average Grade: ", calculateAverageGrade(students))

  console.log("\n");

console.log("program 5.2");

const getNames = (students) => {

    let names = [];

    for(let i=0;i<students.length;i++){
        names.push(students[i].name);
    }

    return names;

}

console.log(getNames(students));

console.log("\n");
console.log("program 5.3");

const calculateAverageAge = (students) => {

    let avgAge = 0;
    for(let i=0;i<students.length;i++){
        avgAge+=students[i].grade;
    }
    return avgAge/students.length;

}

console.log(calculateAverageAge(students));

console.log("\n");
console.log("program 5.4");

const highGrades = (students) => {

    let highGradeStudents = [];

    for(let i=0; i< students.length; i++){
        if(students[i].grade>=90){
            highGradeStudents.push(students[i]);
        }
    }

    return highGradeStudents;

}

console.log(highGrades(students));

console.log("\n");
console.log("program 5.5");

const isAnyBelow18 = (students) => {

    for( let i=0; i<students.length;i++){
        if(students[i].age<18) return true;
    }

    return false;

}

console.log(isAnyBelow18(students));

console.log("\n");
console.log("program 5.6");

const findStudentByName = (students,name) =>{

for( let i=0;i<students.length;i++){
    if(students[i].name === name) return students[i];
}

return `Student with ${name} not found.`;

}

console.log(findStudentByName(students, "Charlie"))

console.log("\n");
console.log("program 5.7");

const getHighScoreStudents = (students) => {

    let highScoreStudents = [];

    for(let i=0; i< students.length; i++){
        if(students[i].grade>85){
            highScoreStudents.push(students[i].name);
        }
    }

    return highScoreStudents;

}

console.log(getHighScoreStudents(students));

