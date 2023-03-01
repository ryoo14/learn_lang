import * as fs from "fs";

const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const A: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(a => Number(a));
const q: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());
const M: number[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ").map(m => Number(m));

function hoge(mm: number, AA: number[]) {
  const a1 = AA.shift() || 0;
  for (const i of AA) {
    if (mm === a1 + i) {
      console.log("yes");
      return;
    }
  }

  if (AA.length >= 2) {
    hoge(mm, AA);
  } else {
    console.log("no");
    return;
  }
}

for (const m of M) {
  console.log("-------------");
  hoge(m, Array.from(A));
}
