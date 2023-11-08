import * as fs from "fs";

const [N]: number[] = fs.readFileSync("/dev/stdin", "utf8").split("\n").map(n => Number(n));
let A: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(n => Number(n));

for (let i = 1; i < N; i++) {
  console.log(A);
  const v = A[i];
  let j = i - 1;
  while (j >= 0 && A[j] > v) {
    A[j+1] = A[j];
    j--;
  }
  A[j+1] = v;
}

console.log(A);
