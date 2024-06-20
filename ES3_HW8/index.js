console.log("Program 1");

const displayWeather = (city,temp) =>  `The Weather in ${city} is ${temp} degrees Celsius.`

console.log(displayWeather("New York", 20));
// Output: The weather in New York is 20 degrees Celsius.

console.log(displayWeather("London", 15));
// Output: The weather in London is 15 degrees Celsius.

console.log("\n");

console.log("Program 2");

const formatCurrency = (amount,currency) => `You have ${amount} ${currency}.`

console.log(formatCurrency(50.5, "USD")); // Output: You have 50.5 USD.

console.log(formatCurrency(100, "EUR")); // Output: You have 100 EUR.

console.log("\n");

console.log("Program 3");

const displayBookSummary = (book,author,genre)=> `The book "${book}" written by ${author} belongs to the ${genre} genre.`

console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"));

console.log("\n");

console.log("Program 4");

const displayMovieInfo = (movie,year,director) => `The movie "${movie}" was released in ${year} and directed by ${director}.` 

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));

console.log("\n");

console.log("Program 5");

const constructEmail = (email,subject)=> `

To: ${email}
Subject: ${subject}

Dear ${email},

.....

`

console.log(constructEmail("alice@example.com", "Meeting Reminder"));

console.log("\n");

console.log("Program 6");


const assessGrade = (score) => `You are ${score>=60?"passing":"falling"}.`

console.log(assessGrade(75)); // Output: You are passing.

console.log(assessGrade(60)); // Output: You are passing.

console.log(assessGrade(45)); // Output: You are failing.

console.log("\n");

console.log("Program 7");

const showMessage = (item,qty)=> `You have ${qty} ${item}${qty>1?"s":""}`;

console.log(showMessage("bangle", 10)); // Output: You have 10 bangles.

console.log(showMessage("lipstick", 1)); // Output: You have 1 lipstick.

console.log("\n");

console.log("Program 8");

const assessMarks = (score,grade) => `You are ${(score>=60 && grade==="A")?"passing":"falling"}.`

console.log(assessMarks(95, "A")); // Output: You are passing.

console.log(assessMarks(62, "C")); // Output: You are failing.

console.log(assessMarks(45, "D")); // Output: You are failing.

console.log("\n");

console.log("Program 9");

const showMsg = (item1,qty1,item2,qty2) => `${(qty1>10 && qty2>5)?"You have a good collection.":"You need to update your collection."}`;

console.log(showMsg("bangle", 11, "lipstick", 6)); // Output: You have a good collection.

console.log(showMsg("bangle", 5, "lipstick", 1)); // Output: You need to update your collection.

console.log(showMsg("bangle", 12, "lipstick", 4)); // Output: You need to update your collection.


console.log("\n");

console.log("Program 10");

const shareStationeryMessage = (pencils,erasers)=> `${((pencils>10&&erasers>5)||(erasers>10&&pencils>5))?"Please share stationery with friends.":"Please ask your friends for stationery."}`

console.log(shareStationeryMessage(12, 8)); // Output: Please share stationery with friends.

console.log(shareStationeryMessage(7, 15)); // Output: Please share stationery with friends.

console.log(shareStationeryMessage(5, 3));  // Output: Please ask your friends for stationery.