import * as fs from "fs";

const [KN, listA]: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [K, N] = KN.split(" ").map(Number);
const A = listA.split(" ").map(Number);

let max = 0;
for (let i = 1; i < N; i++) {
  const d = A[i] - A[i - 1];
  max = Math.max(max, d);
}

max = Math.max(max, (A[0]+K) - A[A.length - 1]);

console.log(K - max);
