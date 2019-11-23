const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = 0;
let sum = 0;
total = 0

console.log();

while (integer > MAX || !Number.isInteger(integer) || integer !== -1) {
  integer = Number(readlineSync.question("Non-negative integer: "));

  if (integer !== -1) {
      sum = sum + integer;
      total = total + 1
  }

}

let print = (sum / total).toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + print + ".");
