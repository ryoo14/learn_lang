import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n: number = Number(input[0]);
const x: number[] = input[1].split(" ").map(xx => parseInt(xx));

let min: number = 10 ** 10;

for (let i = 1; i < 100; i++) {
  const tmp: number[] = x.map(xx => {
    return (xx - i) * (xx - i);
  });
  const temp: number = tmp.reduce((a, z) => a + z, 0);
  if ( temp < min ) {
    min = temp;
  }
}

console.log(min);

