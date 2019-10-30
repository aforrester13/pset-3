const readlineSync = require("readline-sync");

const theNumber = Number(readlineSync.question("\nEnter a number: "));


if (theNumber > 0) {
   console.log("\nPositive\n")
} else if (theNumber < 0) {
   console.log("\nNegative\n")
} else if (theNumber === 0) {
   console.log("\nZero\n")
} else {
   console.log("\nInvalid\n")
}
