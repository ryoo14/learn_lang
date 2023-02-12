import * as fs from "fs";

const [N]: number[] = fs.readFileSync("/dev/stdin", "utf8").split("\n").map(n => Number(n));
let A: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(n => Number(n));

let flag = true;
let count = 0;
while (flag) {
  flag = false;
  for (let j = N-1; j >= 1; j--) {
    if (A[j] < A[j-1]) {
      const t = A[j];
      A[j] = A[j-1];
      A[j-1] = t;
      flag = true;
      count++;
    }
  }
}

console.log(A);
console.log(count);
