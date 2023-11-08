import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [n, a, b]: number[] = input[0].split(" ").map(x => Number(x));
const ab: number = a + b;
const s: Array<string> = input[1].split("");

let bn = 0;
let sum = 0;

for (const t of s) {
  if (t === "a") {
    if (sum < ab) {
      sum += 1;
      console.log("Yes");
    } else {
      console.log("No");
    }
  } else if (t === "b") {
    bn += 1;
    if (sum < ab && bn <= b) {
      sum += 1;
      console.log("Yes");
    } else {
      console.log("No");
    }
  } else if (t === "c") {
    console.log("No");
  }
}
