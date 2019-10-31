const readlineSync = require("readline-sync");

const letterGrade = Number(readlineSync.question("\nEnter a grade: "));

if (letterGrade > 100 || letterGrade < 0) {
      console.log("\nInvalid\n")

} else if (letterGrade >= 90 && letterGrade <= 100) {
      console.log("\nYou received an A.\n")

} else if (letterGrade >= 80 && letterGrade <= 89) {
      console.log("\nYou received a B.\n")

} else if (letterGrade >= 70 && letterGrade <= 79) {
      console.log("\nYou received a C.\n")

} else if (letterGrade >= 60 && letterGrade <= 69) {
      console.log("\nYou received a D.\n")

} else if (letterGrade >= 0 && letterGrade <= 59) {
      console.log("\nYou received an F.\n")

} else {
      console.log("\nInvalid.\n")
}
