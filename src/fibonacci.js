const readlineSync = require("readline-sync");

let fibNum = 0;
let x = 0;

console.log("");

do { fibNum = Number(readlineSync.question("Positive integer: "));
} while (fibNum < 1 || fibNum > 78 || Number.isNaN(fibNum) || !Number.isInteger(fibNum));

x = (Math.pow(1.618034, fibNum) - (Math.pow(-0.618034, fibNum))) / Math.sqrt(5)

if ((x * 10) % 10 < 5) {
  Math.floor(x)
}
if ((x * 10) % 10 >= 5) {
  Math.ceil(x)
}

result = x.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})

console.log("\n" + result + ".");
