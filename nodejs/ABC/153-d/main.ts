import * as fs from "fs";
import { stdin } from "process";

function monster(i: number): number {
  let ans = 0
  if (i > 1) {
    ans += 2 * monster(Math.floor(i / 2)) + 1
  } else {
    ans += 1
  }

  return ans
}

const input: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
console.log(monster(input));
