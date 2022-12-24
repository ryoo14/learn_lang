import * as fs from "fs";

function tasJudge(t: number, a: number, s: number): boolean {
  return t % 2 == 1 || a % 2 == 1 || s % 2 == 1;
}

let [takahashi, aoki, snuke]: number[] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(x => Number(x));
let ans = 0;

if (tasJudge(takahashi, aoki, snuke)) {
  console.log(ans);
} else if (takahashi == aoki && aoki == snuke) {
  console.log(-1);
} else {
  while (true) {
    const tTemp = aoki / 2 + snuke / 2;
    const aTemp = takahashi / 2 + snuke / 2;
    const sTemp = takahashi / 2 + aoki / 2;
    ans += 1;

    takahashi = tTemp;
    aoki = aTemp;
    snuke = sTemp;

    if (tasJudge(takahashi, aoki, snuke)) {
      console.log(ans);
      break;
    } else if (takahashi == aoki && aoki == snuke) {
      console.log(-1);
      break
    }
  }
}

