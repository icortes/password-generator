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

//function to generate random password
function generatePassword() {
  var password = "";

  //ask how long the password is (must be 8 to 128 characters)
  //and stores it in a variable
  var pwLength = prompt("How long do you want your password?", "Must Be 8 to 128 characters.");

  //checks to see if pwLength is between 8 and 128
  //if true continue through the program
  if (pwLength >= 8 && pwLength <= 128) {

    //ask if you want to include lowercase, uppercase, numeric, and/or special characters
    var boolLowerCase = confirm("Press Ok if you want to include lowercase.");
    var boolUpperCase = confirm("Press Ok if you want to include uppercase.");
    var boolNumeric = confirm("Press Ok if you want to include numbers.");
    var boolSpecialChar = confirm("Press Ok if you want to include special characters.");

    //adds all the values into an array
    //if validate has at least one character type then continue the program
    //else exits the function and tells you to try again
    var validate = [boolLowerCase, boolUpperCase, boolNumeric, boolSpecialChar];

    if (validate[0] || validate[1] || validate[2] || validate[3]) {

      //loop with pwLength to add character to password
      for (var i = 0; i < pwLength; i++) {
        //make random number to select character type based on the validate number
        var randNum = Math.floor(Math.random() * validate);


      }
    }

    return "Please select at least one character type.\nTry Again!";


  }

  return "Please input a valid length (8 through 128).\n Try Again!";

}

//returns a random lowercase, uppercase, number, or spacial character
function getNewLowerCase() {
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
}

//returns a random uppercase letter
function getNewUpperCase() {
  var upperCaseAlphabet = [];
  return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
}

//returns a random number from 0 to 9
function getNewNumber() {
  return Math.floor(Math.random() * 10);
}

//return random special character
function getSpacial() {
  var specialCharacter = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}