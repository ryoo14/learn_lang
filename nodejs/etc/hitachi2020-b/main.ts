import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [A, B, M]: number[] = input[0].split(" ").map(n => Number(n));
const a: number[] = input[1].split(" ").map(n => Number(n));
const b: number[] = input[2].split(" ").map(n => Number(n));
const m: number[][] = [];

for (let i = 3; i < M+3; i++) {
  const tmp = input[i].split(" ").map(n => Number(n));
  m.push(tmp);
}

let ans = 999999;

for (let mm of m) {
  const sum = a[mm[0]-1] + b[mm[1]-1] - mm[2];
  if (sum < ans) {
    ans = sum;
  }
}
a.sort((i, l) => i - l);
b.sort((i, l) => i - l);
const min = a[0] + b[0];

console.log(ans < min ? ans : min);
