///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////
///////////////////////////////////////////////////////////////////////////

// Set password parameter variables 
var uppecaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k","l","m", "n", "o", "p" ,"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", "/" ,"-", "="];
var possibleCharacters = [];
var password = []; 
  
function generatePassword() {
 /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  
  // Ask user to input password lenght
  var userChoice = window.prompt("How many characters would you like your password to contain? (8 - 128)");
  if (userChoice < 8) {
    window.alert("Password lenght must be at least 8 characters.");
    return;
  }
  
  if (userChoice > 128) {
    window.alert("Password lenght must be less than 128 characters.");
    return;
  }

  // Take password parameter inputs 
  let allowLowerCaseLetters = confirm("Click OK to confirm including lowercase letters");
  let allowUpperCaseLetters = confirm("click OK to confirm including uppercase letters");
  let allowSpecialCharacters = confirm("click OK to confirm including special characters");
  let allowNumericCharacters = confirm("click OK to confirm including numeric characters");

  // Store password included characters
  if (allowLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }
  if (allowUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(uppecaseLetters);
  }
  if (allowSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (allowNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
 
 // Random number generator fetching an element from a position in the possible character array to populate the password 
  for (var i = 0; i < userChoice; i++) {
    password[i] = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

 // Reference the password id and set it's value equal to the password array
  var x = document.getElementById('password');
  x.value = password.join("");
};

// Run the password generator for the first time
generatePassword();


  