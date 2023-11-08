import * as fs from "fs";

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let X: number = Number(fs.readFileSync("/dev/stdin", "utf8"));

while (true) {
  if (isPrime(X)) {
    break;
  }
  X++;
}

console.log(X);
