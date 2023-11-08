import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const ab: number = Number(input[0].replace(" ", ""));
let flag: boolean = false;

for (let i = 1; i <= 1000; i++) {
  if (i * i === ab) {
    flag = true;
    break;
  }
}

if (flag) {
  console.log("Yes");
} else {
  console.log("No");
}
