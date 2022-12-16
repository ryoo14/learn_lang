import * as fs from "fs";

const [N, K, x]: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let ans = 0;
const devide_K = Math.floor(Number(K) / 2);

for (const i of x.split(" ")) {
  if (devide_K >= Number(i)) {
    ans += Number(i) * 2;
  } else {
    ans += (Number(K) - Number(i)) * 2;
  }
}

console.log(ans);
