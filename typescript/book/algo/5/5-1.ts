import * as fs from "fs";

const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const S: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(s => Number(s));
const q: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const T: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(t => Number(t));

let count = 0;
for (const i of T) {
  if (S.includes(i)) {
    count++;
  }
}
console.log(count);
