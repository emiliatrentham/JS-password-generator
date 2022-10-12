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

var uppecaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k","l","m", "n", "o", "p" ,"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", "/" ,"-", "="];
var possibleCharacters = [];
var userPassword = [];
var password = []; 
  
function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  var userChoice = window.prompt("How many characters would you like your password to contain? Password length must be between 8 and 128 characters.");
  if (userChoice < 8) {
    alert("Password lenght must be at least 8 characters.")
    return null;
  }  // use same if statement for more than 128
  // how to return null whne it is not a number (google)
  var specialCharacters = confirm("Click OK to confirm including special characters");
  if (specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    userPassword.push(possibleCharacters)
    // possibleCharacters += specialCharacters

  }
  //do same for numeric characters 
  console.log(possibleCharacters)
  
  for (var i = 0; i < userChoice; i++) {
    var index = userPassword(Math.floor(Math.random() * userChoice.length)) 
    password.push(index)
    
  }

  return password;
}



// What are the steps?

/*
   Show prompt asking:"How many characters would you like your password to contain?
   - User submits selection (Event) 
   HANDLE EVENT - Store value update state
   Must be between 8 and 128 characters - Show alert saying: Password lenght must be at least 8 characters 
   
   Show prompt asking:click OK to confirm including special characters"
    -User submits selection (Event)
   HANDLE EVENT - Store value in userChoice (Update state)
     
   Show prompt asking:click OK to confirm incluidng numeric characters" 
   Show prompt asking:"click OK to confirm including lowercase letters"
   Show prompt asking: "click OK to confirm including uppercase letters" 
   Show alert saying: Password lenght must be provided as a number 
   
   Validate input
   If user pressed Cancel, immediately end function

  ///////////////////////////////////////////////////////////////////////
  /* Generate a random computer selection (Update state)
  //Get random index from array of options

     var index = Math.floor(Math.random() * options.length);
     var computerChoice = options[index];                       */

  // Questions:
   //* 1. How can we trigger the password generator so that we can restart it later?
   //* 2. How do we randomly choose an answer?
  
  generatePassword()