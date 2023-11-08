import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N: number = Number(input[0]);
const A: number[] = input[1].trim().split(" ").map(n => Number(n));
const M = new Map<number, number>([]);

for (let i = 1; i < A.length + 1; i++) {
  M.set(A[i-1], i);
}

const hoge = new Map([...M].sort((a, b) => a[0] - b[0]));
let ans = "";
for (const i of hoge.values()) {
  ans += `${i} `;
}
console.log(ans.trim());
