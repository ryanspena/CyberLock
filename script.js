// Assignment code here
var possibleCharacters = "";
var generatedPassword = "";


function generatePassword() {

var lowerCase = "abcedfghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var numberalCharacters = "0123456789"; 
var specialCharacters = "$!#'%()*+&,-./:;<=>?@[^]_`{|}~";
var possibleCharacters = "";
var generatedPassword = "";
var count = 0;

var passwordLength = parseInt (prompt ("How many characters would you like?"));
console.log("passwordLength" , passwordLength);
if (isNaN(passwordLength) == true) {
  alert ("Password length must be provided as a number");
  return ("Invalid input. Password not generated.");
}
if (passwordLength < 12 || passwordLength > 128 ) {
  alert ("Password must be at least 12 to 128 characters.");
  return ("Password not generated");
}
count = passwordLength;

var hasLC = confirm ("Do you want to include LowerCase letters?");
var hasUC = confirm ("Do you want to include UpperCase letters?");
var hasNC = confirm ("Do you want to include numbers?");
var hasSP = confirm ("Do you want to include symbols?");

if (hasLC === false && hasUC === false && hasNC === false && hasSP === false) {
  alert ("At least one character type must be selected");
  return ("Select which characters to include.");
}

if (hasLC === true) {
  possibleCharacters+= lowerCase;
  // generatedPassword+= lowerCase [Math.floor (Math.random() * lowerCase.length)];
  // console.log("Generated password" , generatedPassword);
  // count--;
}

if (hasUC === true) {
  possibleCharacters+= upperCase;
  // generatedPassword+= upperCase [Math.floor (Math.random() * upperCase.length)];
  // console.log ("Generated password" , generatedPassword);
  // count--;
}

if (hasNC === true) {
  possibleCharacters+= numberalCharacters;
  // generatedPassword+= numberalCharacters [Math.floor (Math.random() * numberalCharacters.length)];
  // console.log ("generated password" , generatedPassword);
  // count--;
}

if (hasSP === true) {
  possibleCharacters+= specialCharacters;
  // generatedPassword+= specialCharacters [Math.floor (Math.random() * specialCharacters.length)];
  // console.log ("generated password" , generatedPassword);
  // count--;
}

for (var i = 0; i < count; i++) {
  generatedPassword+=possibleCharacters[Math.floor (Math.random() * possibleCharacters.length)];
}
console.log(generatedPassword);
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
