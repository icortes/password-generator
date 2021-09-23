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

    //if user selects at least one character type then continue the program
    //else exits the function and tells you to try again
    if (boolLowerCase || boolUpperCase || boolNumeric || boolSpecialChar) {
      //adds all the criteria the user wants into a bigger library array
      var bigLibrary = [];
      if (boolLowerCase) {
        bigLibrary = bigLibrary.concat(getLowerCase());
      }
      if (boolUpperCase) {
        bigLibrary = bigLibrary.concat(getUpperCase());
      }
      if (boolNumeric) {
        bigLibrary = bigLibrary.concat(getNumbers());
      }
      if (boolSpecialChar) {
        bigLibrary = bigLibrary.concat(getSpecial());
      }
      console.log(bigLibrary);
      //loop with pwLength to add character to password
      for (var i = 0; i < pwLength; i++) {
        password = password + bigLibrary[Math.random() * bigLibrary.length];
        console.log(password);
      }
      return password;
    }

    return "Please select at least one character type.\nTry Again!";


  }

  return "Please input a valid length (8 through 128).\n Try Again!";

}



//returns a lowercase alphabet
function getLowerCase() {
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return lowerCaseAlphabet;
}

//returns an uppercase alphabet
function getUpperCase() {
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return upperCaseAlphabet;
}

//returns numbers 0 to 9
function getNumbers() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return numbers;
}

//returns special character library
function getSpecial() {
  var specialCharacter = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  return specialCharacter;
}