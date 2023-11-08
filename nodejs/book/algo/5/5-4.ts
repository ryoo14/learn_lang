import * as fs from "fs";

const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());

const list: string[] = [];

for (let i = 0; i < n; i++) {
  const [f, str] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
  switch (f) {
  case "insert":
    list.push(str);
    break;
  case "find":
    if (list.includes(str)) {
      console.log("yes");
    } else {
      console.log("no");
    }
    break;
  }
}

