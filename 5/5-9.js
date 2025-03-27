const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

let v1 = new Array();

for (let i = 0; i < input.length; i++) {
  v1[i] = [...input[i]].reverse().join("");
}

v1 = v1.map(Number);

console.log(Math.max(...v1));
