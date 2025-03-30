const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((ele) => Number([...ele].reverse().join('')));

console.log(Math.max(...input));
