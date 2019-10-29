const readlineSync = require("readline-sync");

const theNumber = Number(readlineSync.question("\nEnter a number: "));


if (theNumber > 0) {
    console.log("Positive")
} else (theNumber < 0) {
    console.log("Negative")
}
