import * as fs from "fs";

const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const S: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(s => Number(s));
const q: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const T: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(t => Number(t));

let count = 0;

for (const t of T) {
  let Q = S;
  let left = 0;
  let right = n;
  while (left < right) {
    const m = Math.floor((left+right)/2);
    if (Q[m-1] === t) {
      count++;
      break;
    } else if (Q[m-1] < t) {
      left = m + 1;
    } else if (Q[m-1] > t) {
      right = m;
    }
  }
}

console.log(count);
