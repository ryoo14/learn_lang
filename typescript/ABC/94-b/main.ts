import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [N, M, X]: number[] = input[0].split(" ").map(n => Number(n));
const A: number[] = input[1].split(" ").map(n => Number(n));

const ZX = Array.from({length: X}, (_, i) => i);
const XN = Array.from({length: N-X+1}, (_, i) => i + X);

const ZXN = ZX.filter(n => A.includes(n)).length;
const XNN = XN.filter(n => A.includes(n)).length;

if (ZXN > XNN) {
  console.log(XNN);
} else {
  console.log(ZXN);
}
