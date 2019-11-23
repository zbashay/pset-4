const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
let n = 0

console.log();

do {
  n = Number(readlineSync.question("Non-negative integer: "));
} while (n > MAX || !Number.isInteger(n) || n < 0);

let boolean = true

  if (n===1){
    boolean = false
  }
  else if(n === 2){
    boolean = true
  }


  else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        boolean = false
      }
   }
  }

if (boolean === false){
  console.log("\nNot prime.")
} else if (boolean === true){
  console.log ("\nPrime.")
}
