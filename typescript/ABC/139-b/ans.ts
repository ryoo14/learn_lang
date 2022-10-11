import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [a, b]: number[] = input[0].split(" ").map(x => parseInt(x));

let sum = 1;
let cnt = 0;

if (b === 1) {
  console.log(0);
} else {
  for (cnt; cnt < b; cnt++){
    if (b <= sum) {
      break;
    }
    sum = sum + a - 1;
  }
  console.log(cnt);
}
