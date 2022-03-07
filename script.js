// Assignment Code
var generateBtn = document.querySelector("#generate");

// Functions and Variables Provided by instructor
var allowUpperCase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passCharCount;
var upperCaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// Work Begins here..
// Creating additional global variables
var lowerCaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
var specials = [ "!", "@", "#", "$", "&"]; 

// Merge or Perge? Variables determined by the UI will be stored here. 
var mergeArrays = [];
var purgeArrays = [];

// User Interface
function userInput () {

  // Executable functions
  askCharCount();
  askUppercase();
  askLowercase();
  askNumbers();
  askSpecial();
  
  // Asks if how many characters will be used..
  function askCharCount () {
    // variable for non-numerical values
    var regex = /\D/;

    // loop rejection until values are within parameters
    do {
      
      var alert = "How many characters would you like in your password?";
      passCharCount = parseInt(prompt(alert, 'Please select a number between 8 and 20'));
      
      // Accepts/Rejects outside numerical range
      if (passCharCount < 8 || passCharCount > 20) {
        parseInt(prompt("Please select a numerical value between 8 and 20"));
      } else
      // Rejects non-numerical values
      if (regex.test(passCharCount) === true) {
        parseInt(prompt("Please select a numerical value between 8 and 20"));
      } else 
      // rejects if passCharCount is null
      if (!passCharCount){
        parseInt(prompt("Please select a numerical value between 8 and 20"));
      } else if (passCharCount >= 8 && passCharCount <= 20) {
        console.log(passCharCount);
        return passCharCount;
      }

    } while (passCharCount < 8 || passCharCount > 20 || regex.test(passCharCount) || !passCharCount);
  }


  //Asks if Uppercase will be used. Provided by instructor..
  function askUppercase(){
    allowUpperCase = confirm("Are upper case characters allowed?");
    console.log(allowUpperCase);
    // Additional code provided by author
    if (allowUpperCase) {
      mergeArrays.push(...upperCaseChars);
      return mergeArrays;
    } else {
      purgeArrays.push(...upperCaseChars);
      return purgeArrays;
    }
  }

  // Asks if lowercase will be used..
  function askLowercase() {
    allowLowerCase = confirm("Are lower case characters allowed?");
    console.log(allowLowerCase);
    if (allowLowerCase) {
      mergeArrays.push(...lowerCaseChars);
      return mergeArrays;
    } else {
      purgeArrays.push(...lowerCaseChars);
      return purgeArrays;
    }
  }

  // Asks if numbers will be used..
  function askNumbers () {
    allowNumbers = confirm("Are numbers allowed?");
    console.log(allowNumbers);
    if (allowNumbers) {
      mergeArrays.push(...numbers);
      return mergeArrays;
    } else {
      purgeArrays.push(...numbers);
      return purgeArrays;
    }
  }

  // Asks if special characters will be used..
  function askSpecial () {
    allowSpecials = confirm("Are special characters allowed?");
    console.log(allowSpecials);
    if (allowSpecials) {
      mergeArrays.push(...specials);
      return mergeArrays;
    } else {
      purgeArrays.push(...specials);
      return purgeArrays;
    }
  }
}

// This function creates the password..

function generatePassword() {
 userInput();
 finalResult = "";

  // Creates Password
  for (let i = 0; i < passCharCount; i++) {
    var randGen = Math.floor(Math.random() * (mergeArrays.length - 1));
    finalResult += mergeArrays[randGen];
  }
  
  return finalResult;
}

// Write password to the #password input
function writePassword() {
  //Create password with accepted variables
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

