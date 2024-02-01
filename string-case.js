// string comparison uppercase lowercase and trim

const school = "Amragachia Secondary School";
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "Javascript";
const book = "javascript";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Congratulations! You're winner");
} else {
  console.log("Sorry, You're disqualified");
}

const drink = "alcohol ";
// trim can replaced the starting and ending gap from string
const liquid = " alcohol";

if (drink.trim() === liquid.trim()) {
  console.log("I think you're drunk");
} else {
  console.log("All right.Now you're normal");
}
