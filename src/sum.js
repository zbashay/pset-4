const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


let lowerBound = 1;
let upperBound = 0;
let sum = 0;
let x = 0;

console.log();
while (lowerBound > upperBound || lowerBound < MIN || upperBound > MAX || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (lowerBound % 2 === 0) {
  for (let x = lowerBound; x <= upperBound; x = x + 2) {
    sum = sum + x;
  }
} else {
  for (let x = lowerBound +1; x <= upperBound; x = x + 2) {
    sum = sum + x;
  }
}

sum = (sum).toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 2});

console.log("\n" + sum + ".");
