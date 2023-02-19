import * as fs from "fs";

const input: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");

const list: number[] = [];

for (const s of input) {
  if (s === "-" || s === "+" || s === "*") {
    const right: number = list.pop() || 1;
    const left: number = list.pop() || 1;
    switch (s) {
      case "-":
        list.push(left - right);
        break;
      case "+":
        list.push(left + right);
        break;
      case "*":
        list.push(left * right);
        break;
    }
  } else {
    list.push(Number(s));
  }
}

console.log(list[0]);
