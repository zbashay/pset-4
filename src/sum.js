
const readlineSync = require("readline-sync");

let lowerBound = 1;
let upperBound = 0;
let sum = 0;

while (lowerBound > upperBound) {
  lowerBound = Number(readlineSync.question("\nLower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

for (let x = lowerBound; x < upperBound; x++) {
    console.log(x);
}
