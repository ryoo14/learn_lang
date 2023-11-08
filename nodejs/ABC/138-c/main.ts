import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const N: number = Number(input[0]);
const V: number[] = input[1].split(" ").map(n => Number(n));

while (V.length !== 1) {
  V.sort((a, b) => a - b);
  const min1 = V.shift() || 1;
  const min2 = V.shift() || 1;
  const result = (min1 + min2) / 2;
  V.push(result);
}

console.log(V[0]);
