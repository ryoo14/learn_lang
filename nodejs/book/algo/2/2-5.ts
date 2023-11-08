import * as fs from "fs";

const input: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n").map(n => Number(n));
let maxv = -200000000000;
let minv = input[0]

for (let i = 1; i < input.length; i++) {
  maxv = Math.max(maxv, input[i] - minv);
  minv = Math.min(minv, input[i]);
}

console.log(maxv);
