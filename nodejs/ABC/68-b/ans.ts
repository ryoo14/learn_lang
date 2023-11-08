import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(input[0]);

let ans = 1;
let now = 0;

for (let i = 1; i <= n; i++) {
  let num = 0;
  let s = i;
  for (;;) {
    if (s % 2 == 0) {
      num += 1;
      s = s/ 2;
    } else {
      break;
    }
  }

  if (now < num) {
    ans = i;
    now = num;
  }
}

console.log(ans);
