import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const N: number = Number(input[0]);
const P: string = input[1].split(" ").map(n => Number(n)).toString();
const Q: string = input[2].split(" ").map(n => Number(n)).toString();

function permutation<T>(items: T[], size: number = items.length): T[][] {
  if (!size) {
    return [[]];
  }

  size = Math.min(items.length, size);

  return items.flatMap((item) => {
    return permutation(
      items.filter((it) => it !== item),
      size - 1
    ).map((permutation) => [item, ...permutation]);
  });
}

const range = (n: number) => Array.from({length: n}, (_, k) => k + 1);
const Narray = permutation(range(N));

let p = 9;
let q = 9;
for (let i = 0; i < Narray.length; i++){
  if (Narray[i].toString() === P) {
    p = i;
  }
  if (Narray[i].toString() === Q) {
    q = i;
  }
}
console.log(Narray);
console.log(Math.abs(p - q));
