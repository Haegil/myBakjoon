const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");

function countCroatianAlphabets(input) {
  const croatian = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];
  let i = 0;
  let count = 0;

  while (i < input.length) {
    let found = false;

    for (let symbol of croatian) {
      if (input.slice(i, i + symbol.length) === symbol) {
        count++;
        i += symbol.length;
        found = true;
        break;
      }
    }

    if (!found) {
      count++;
      i++;
    }
  }

  return count;
}

// 사용 예시
console.log(countCroatianAlphabets(input.join(""))); // 출력: 6
