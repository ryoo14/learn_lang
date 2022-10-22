import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n: number = Number(input[0]);
const a: number[] = input[1].split(" ").map(x => Number(x)).sort((a, b) => b - a);

let alice = 0;
let bob = 0;

for (let i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    alice += a[i];
  } else {
    bob += a[i];
  }
}

console.log(alice - bob);
