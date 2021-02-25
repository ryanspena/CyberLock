// Assignment code here
let lowerCase = "abcedfghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let numberals = "0123456789"; 
let specialCharacters = "!@#$%^&*";
let possibleCharacters = "";
let generatedPassword = "";
let count = 0;

function generatePassword() {

let passwordLength = parseInt (prompt ("How many characters do you want?"));
console.log("passwordLength" , passwordLength);
if (isNaN(passwordLength) == true) {
  alert ("Password length must be provided as a number");
  return ("Invalid input of password not generated.");
}
if (passwordLength < 12 && passwordLength > 128 ) {
  alert ("");
  return ("Password not generated");
}
count = passwordLength;

let hasLC = confirm ("Do you want to include LowerCase letters?");
let hasUC = confirm ("Do you want to include UpperCase letters?");
let hasNM = confirm ("Do you want to include numbers?");
let hasSP = confirm ("Do you want ti include symbols?");

if (hasLC === false && hasUC === false && hasNM === false && hasSP === false) {
  alert ("At least one character type needs to be selected");
  return ("Enter at least one selection.");
}
if (hasLC === true) {
  possibleCharacters+= lowerCase;
  generatedPassword+= lowerCase [Math.floor (Math.random() * lowerCase.length)];
  console.log("Generated password" , generatedPassword);
  count--;
}

for (let i = 0; i < count; i++) {
  generatedPassword+=possibleCharacters[Math.floor (Math.random() * possibleCharacters.length)];
}
return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
