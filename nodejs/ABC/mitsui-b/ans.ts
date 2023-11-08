import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n: number = Number(input[0]);

const x = Math.ceil(n / 1.08);
if (Math.floor(x * 1.08) === n) {
  console.log(n);
} else {
  console.log(":(");
}
