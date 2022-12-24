import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(BigInt);
const nk = input[0] % input[1];
const kn = input[1] - nk;

if (nk < kn) {
  console.log(Number(nk));
} else {
  console.log(Number(kn));
}
