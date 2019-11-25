const readlineSync = require("readline-sync");

var theHeight = 0;
var space = "##";
var opposite = "##"
var theHeight2 = theHeight;
var theHeight3 = theHeight;

console.log("");

do {
      theHeight = Number(readlineSync.question("Height: "));
} while (theHeight < 1 || theHeight > 24 || Number.isNaN(theHeight) || !Number.isInteger(theHeight));

var theHeight2 = theHeight;
var theHeight3 = theHeight;

while (theHeight2 > 1) {
      space = " " + space
      --theHeight2
}

while (theHeight3 > 1) {
      opposite = opposite + " "
      --theHeight3
}

console.log("\n" + space + "  " + opposite)


while (theHeight > 1) {
    var space1 = space.replace(" #", "##")
    var opposite1 = opposite.replace("# ", "##")

    console.log(space1 + "  " + opposite1)
    --theHeight

    var space = space1
    var opposite = opposite1
}
console.log("")
