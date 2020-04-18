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

var passwordLength;
var userLowerCase;
var userUpperCase;
var userNumCase;
var userSpecialCase;
var mastArray = [];
var randMasterChar;
var password = "";
var generateBtn = document.querySelector("#generate");
var writePassword = document.querySelector("#password");

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
  if (userUpperCase) {
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

function showPassword() {
  writePassword.value = password;
}

function showError() {
  writePassword.value = "Invalid Input. Hit Generate Password again";
}

function generatePassword() {
  userPrompts();
  masterArray();
  var tempPass = [];
  if (passwordLength > 7 && passwordLength < 129) {
    if (
      userLowerCase === false &&
      userUpperCase === false &&
      userNumCase === false &&
      userSpecialCase === false
    ) {
      showError();
    } else {
      for (var i = 0; i < passwordLength; i++) {
        randCharGenerator();
        tempPass.push(randMasterChar);
      }
      password = tempPass.join("");
      showPassword();
    }
  } else {
    showError();
  }
}

// function checkPassword() {
//   if (userSpecialCase) {
//     for (var j = 0; j < password.length; j++) {
//       var SpecialCaseTrue = specialChar.includes(password[j]);
//       if (SpecialCaseTrue === false) {
//         break;
//       }
//     }
//     console.log(SpecialCaseTrue);
//   }
// }

// generatePassword();

// // Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword.value = " ";
  generatePassword();
});
