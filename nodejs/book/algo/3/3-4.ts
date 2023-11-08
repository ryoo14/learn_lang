import * as fs from "fs";

const [N]: number[] = fs.readFileSync("/dev/stdin", "utf8").split("\n").map(n => Number(n));
let A: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(n => Number(n));

let count = 0;
for (let i = 0; i < N; i++) {
  count++;
  let minj = i;
  for (let j = i; j < N; j++) {
    if (A[j] < A[minj]) {
      minj = j;
    }
  }
  const tmp = A[i];
  A[i] = A[minj];
  A[minj] = tmp;
}

console.log(A);
console.log(count);
