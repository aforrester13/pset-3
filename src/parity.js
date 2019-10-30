const readlineSync = require("readline-sync");

const integer = String(readlineSync.question("\nEnter a integer: "));

  if (Number.isSafeInteger(integer) == false) {

    if (integer % 2 == 0) {
     console.log("\nEven.\n")

    } else if (integer % 2 !== 0) {
     console.log("\nOdd.\n")

    } else {
     console.log("\nInvalid.\n")
    }

  } else if (Number.isSafeInteger(integer) == true) {
    console.log("\nInvalid\n")

  } else {
    console.log("\nInvalid\n")
  }
