const nickName = "khanshaheb";
const part1 = nickName.slice(0, 4);
const part2 = nickName.slice(4, 10);
console.log(part1);
console.log(part2);

// convert string to array
const fdStr = "Rohim, Korim, Abdul, Babul, Kabul";
const fdArray = fdStr.split(",");
console.log(fdArray);

// join array
const numbers = [12, 23, 34, 45, 56, 67, 34, 28];
const joinNumbers = numbers.join("|");
console.log(joinNumbers);

const realFd = ["Rohim", "Korim", "Abdul", "Babul", "Kabul"];
// const joinFd = realFd.join("-");
console.log(realFd.join("-"));
