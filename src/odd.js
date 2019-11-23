const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = 0;
let print = 0;

console.log();

while (integer <= 0 || integer > MAX || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}

while (integer > 0) {
  let a = integer % 10;
  integer = Math.floor(integer / 10);

  if (a % 2 === 1) {
    print = a + print;
}
}

console.log("\n" + print + ".")
