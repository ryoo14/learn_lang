import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let [N, x] = input[0].split(" ").map(n => Number(n));
const a: number[] = input[1].split(" ").map(n => Number(n));
let count = 0;
let bool = false;

a.sort((a, b) => a - b);

for (let i of a) {
  if (x > i) {
    x -= i;
    count += 1;
    continue;
  } else if (x === i) {
    x -= i;
    count += 1;
    break;
  } else if (x < i) {
    bool = true;
    break;
  }
}

if (x !== 0 && count !== 0) {
  count -= 1;
}

if (bool && count !== 0) {
  count += 1;
}

console.log(count);
