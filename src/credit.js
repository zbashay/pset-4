const readlineSync = require("readline-sync");

let creditCard = 0;
let value = 0;
let value1 = 0;
let sum = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let digit = 0;

console.log()

do {
    creditCard = Number(readlineSync.question("Number: "))
} while (creditCard < 100000000000 || creditCard > 9999999999999999 || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

let creditCard2 = creditCard;
let creditCard3 = creditCard;

while (creditCard2 > 0) {
    if (creditCard2 > 0) {
       value = Math.floor((creditCard2 % 100) / 10);
       creditCard2 = Math.floor(creditCard2 / 100);
       value4 = value * 2;
       digit++
       if (value4 < 10) {
         sum = sum + value4
       }

       if (value4 >= 10) {
         value1 = value4 / 10;
         value2 = Math.floor(value1);
         value3 = value4 % 10;
         sum = sum + value2 + value3;
       }
    }
}

while (creditCard3 > 0) {
    if (creditCard3 === creditCard) {
      value5 = (creditCard3 % 10);
      creditCard3 = Math.floor((creditCard3 / 10));
      sum = sum + value5
      continue;
    }

    if (creditCard3 !== creditCard) {
      value6 = Math.floor((creditCard3 % 100) / 10);
      creditCard3 = Math.floor((creditCard3 / 100))
      sum = sum + value6
      digit++
    }
}
while (creditCard > 0) {
    if (digit === 15 && (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 34 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 37) {
      console.log("\nAmex.")
      break;
    }

    if ((digit === 16) && (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 51 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 52 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 53 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 54 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 55) {
      console.log("\nMastercard.")
      break;
    }

    if ((Math.floor(creditCard / (Math.pow(10, (digit - 1))))) === 4 && (digit === 13 || digit === 16)) {
      console.log("\nVisa.")
      break;
    }

    if (digit === 15 || digit === 16 || digit === 13 || creditCard / (Math.pow(10, (digit - 1)) === 4 || creditCard / (Math.pow(10, (digit - 2)) === 51 || creditCard / (Math.pow(10, (digit - 2))) === 52 || creditCard / (Math.pow(10, (digit - 2))) === 53 || creditCard / (Math.pow(10, (digit - 2))) === 54 || creditCard / (Math.pow(10, (digit - 2))) === 55) || creditCard / (Math.pow(10, (digit - 2)) === 34 || creditCard / (Math.pow(10, (digit - 2))) === 37))) {
      console.log("\nInvalid.")
      break;
    }
}
