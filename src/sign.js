const readlineSync = require("readline-sync");

const theNumber = String(readlineSync.question("\nEnter a number: "));

if (theNumber.includes(".")) {
   console.log("\nInvalid.\n")

} else if (theNumber < (-9,007,199,254,740,992)) {
   console.log("\nInvalid.\n")

} else if (theNumber > 9,007,199,254,740,992) {
   console.log("\nInvalid.\n")

} else if (theNumber < 0) {
   console.log("\nNegative.\n")

} else if (theNumber == 0) {
   console.log("\nZero.\n")

} else if (theNumber > 0) {
   console.log("\nPositive.\n")

} else {
   console.log("\nInvalid.\n")
}
