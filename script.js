// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  "!",
  "”",
  "#",
  "$",
  "%",
  "&",
  "’",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var allChar = lowerCaseChar.concat(upperCaseChar, numChar, specialChar);

var password = [];
var passwordLength;
var userLowerCase;
var userUpperCase;
var userNumCase;
var userSpecialCase;
var mastArray = [];
var randMasterChar;
var masterPassword = "";

//Add event listener here :

function userPrompts() {
  var userLength = prompt(
    "How long of a password do you want? Enter number between 8 and 128"
  );
  passwordLength = parseInt(userLength);
  userLowerCase = confirm(
    "Do you require Lower Case Characters in your password?"
  );
  userUpperCase = confirm(
    "Do you require Upper Case Characters in your password?"
  );
  userNumCase = confirm("Do you require Numbers in you password");
  userSpecialCase = confirm(
    "Do you require Special Case Characters in your password?"
  );

  return passwordLength;
  return userLowerCase;
  return userUpperCase;
  return userNumCase;
  return userSpecialCase;
}

function masterArray() {
  var tempArray = [];
  if (userLowerCase) {
    tempArray.push(lowerCaseChar);
  }
  if (userLowerCase) {
    tempArray.push(upperCaseChar);
  }
  if (userNumCase) {
    tempArray.push(numChar);
  }
  if (userSpecialCase) {
    tempArray.push(specialChar);
  }
  mastArray = tempArray.flat();
  return mastArray;
}

function randCharGenerator() {
  randMasterChar = mastArray[[Math.floor(Math.random() * mastArray.length)]];
  return randMasterChar;
}

function generatePassword() {
  userPrompts();
  masterArray();
  if (passwordLength > 7 && passwordLength < 129) {
    for (var i = 0; i < passwordLength; i++) {
      randCharGenerator();
      password.push(randMasterChar);
    }
    masterPassword = password.join("");
    console.log(masterPassword);
  } else {
    console.log("Invalid Input");
  }
}

generatePassword();
