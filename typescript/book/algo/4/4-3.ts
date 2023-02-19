import * as fs from "fs";

const N: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(n => Number(n));
const A: (string | number)[][] = [[]];
for (let i = 0; i < N[0]; i++) {
 let [s, n] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
 A[i] = [s, Number(n)];
}

const ans: (string | number)[][] = [];
let total:number = 0;

while (A.length !== 0) {
  const p: (string | number)[] = A.shift() || ["a", 1];
  if (p[1] <= N[1]) {
    total += Number(p[1]);
    ans.push([p[0], total]);
  } else {
    total += N[1];
    A.push([p[0], Number(p[1]) - N[1]]);
  }
}

for (const l of ans) {
  console.log(l[0], l[1]);
}
