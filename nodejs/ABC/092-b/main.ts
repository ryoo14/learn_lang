import * as fs from "fs";

function eatChoco(a: number, d: number): number {
  let count = 0;
  while (count * a + 1 <= d) {
    count += 1;
  }
  
  return count;
}

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const hoge: string = input.shift() || "";
const [D, X]: any = hoge.split(" ").map(n => Number(n));
let ans = X;
for (let i of input) {
  ans += eatChoco(Number(i), D)
}

console.log(ans);
