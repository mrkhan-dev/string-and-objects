let sentence = "I want to be a web developer";

let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}
// console.log(reverse);

for (i = 0; i < sentence.length; i++) {
  const latter = sentence[i];
  reverse = latter + reverse;
}
// console.log(reverse);

// reverse shortcut
const reversed = sentence.split("").reverse().join("");
console.log(reversed);
