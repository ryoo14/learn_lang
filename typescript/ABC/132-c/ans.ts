import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(input[0]);
const d = input[1].split(" ").map(Number).sort((a, b) => a - b);

const a = d[N / 2 - 1];
const b = d[N / 2];

console.log(b - a);
