const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");

const arr1 = [
  3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10,
  10,
];

let result = 0;
for (let i = 0; i < input.length; i++) {
  let ch = input.join("").charCodeAt(i);
  let alpha = ch - 65;
  result += arr1[alpha];
}

console.log(result);
