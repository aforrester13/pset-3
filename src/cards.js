const readlineSync = require("readline-sync");

const cardEntered = String(readlineSync.question("\nEnter a playing card: "));

let ace = "\nAce"
let king = "\nKing"
let queen = "\nQueen"
let jack = "\nJack"
let ten = "\nTen"
let nine = "\nNine"
let eight = "\nEight"
let seven = "\nSeven"
let six = "\nSix"
let five = "\nFive"
let four = "\nFour"
let three = "\nThree"
let two = "\nTwo"

let spades = " of Spades.\n"
let hearts = " of Hearts.\n"
let diamonds = " of Diamonds.\n"
let clubs = " of Clubs.\n"

if (cardEntered == "AS"){
    console.log(ace.concat(spades) + "")
} else if (cardEntered == "AH"){
    console.log(ace.concat(hearts) + "")
} else if (cardEntered == "AD"){
    console.log(ace.concat(diamonds) + "")
} else if (cardEntered == "AC"){
    console.log(ace.concat(clubs) + "")
} else if (cardEntered == "KS"){
    console.log(king.concat(spades) + "")
} else if (cardEntered == "KH"){
    console.log(king.concat(hearts) + "")
} else if (cardEntered == "KD"){
    console.log(king.concat(diamonds) + "")
} else if (cardEntered == "KC"){
    console.log(king.concat(clubs) + "")
} else if (cardEntered == "QS"){
    console.log(queen.concat(spades) + "")
} else if (cardEntered == "QH"){
    console.log(queen.concat(hearts) + "")
} else if (cardEntered == "QD"){
    console.log(queen.concat(diamonds) + "")
} else if (cardEntered == "QC"){
    console.log(queen.concat(clubs) + "")
} else if (cardEntered == "JS"){
    console.log(jack.concat(spades) + "")
} else if (cardEntered == "JH"){
    console.log(jack.concat(hearts) + "")
} else if (cardEntered == "JD"){
    console.log(jack.concat(diamonds) + "")
} else if (cardEntered == "JC"){
    console.log(jack.concat(clubs) + "")
} else if (cardEntered == "TS"){
    console.log(ten.concat(spades) + "")
} else if (cardEntered == "TH"){
    console.log(ten.concat(hearts) + "")
} else if (cardEntered == "TD"){
    console.log(ten.concat(diamonds) + "")
} else if (cardEntered == "TC"){
    console.log(ten.concat(clubs) + "")
} else if (cardEntered == "9S"){
    console.log(nine.concat(spades) + "")
} else if (cardEntered == "9H"){
    console.log(nine.concat(hearts) + "")
} else if (cardEntered == "9D"){
    console.log(nine.concat(diamonds) + "")
} else if (cardEntered == "9C"){
    console.log(nine.concat(clubs) + "")
} else if (cardEntered == "8S"){
    console.log(eight.concat(spades) + "")
} else if (cardEntered == "8H"){
    console.log(eight.concat(hearts) + "")
} else if (cardEntered == "8D"){
    console.log(eight.concat(diamonds) + "")
} else if (cardEntered == "8C"){
    console.log(eight.concat(clubs) + "")
} else if (cardEntered == "7S"){
    console.log(seven.concat(spades) + "")
} else if (cardEntered == "7H"){
    console.log(seven.concat(hearts) + "")
} else if (cardEntered == "7D"){
    console.log(seven.concat(diamonds) + "")
} else if (cardEntered == "7C"){
    console.log(seven.concat(clubs) + "")
} else if (cardEntered == "6S"){
    console.log(six.concat(spades) + "")
} else if (cardEntered == "6H"){
    console.log(six.concat(hearts) + "")
} else if (cardEntered == "6D"){
    console.log(six.concat(diamonds) + "")
} else if (cardEntered == "6C"){
    console.log(six.concat(clubs) + "")
} else if (cardEntered == "5S"){
    console.log(five.concat(spades) + "")
} else if (cardEntered == "5H"){
    console.log(five.concat(hearts) + "")
} else if (cardEntered == "5D"){
    console.log(five.concat(diamonds) + "")
} else if (cardEntered == "5C"){
    console.log(five.concat(clubs) + "")
} else if (cardEntered == "4S"){
    console.log(four.concat(spades) + "")
} else if (cardEntered == "4H"){
    console.log(four.concat(hearts) + "")
} else if (cardEntered == "4D"){
    console.log(four.concat(diamonds) + "")
} else if (cardEntered == "4C"){
    console.log(four.concat(clubs) + "")
} else if (cardEntered == "3S"){
    console.log(three.concat(spades) + "")
} else if (cardEntered == "3H"){
    console.log(three.concat(hearts) + "")
} else if (cardEntered == "3D"){
    console.log(three.concat(diamonds) + "")
} else if (cardEntered == "3C"){
    console.log(three.concat(clubs) + "")
} else if (cardEntered == "2S"){
    console.log(two.concat(spades) + "")
} else if (cardEntered == "2H"){
    console.log(two.concat(hearts) + "")
} else if (cardEntered == "2D"){
    console.log(two.concat(diamonds) + "")
} else if (cardEntered == "2C"){
    console.log(two.concat(clubs) + "")
} else {
  console.log("\nInvalid\n")
}
