// Assignment code here
const numbersList = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!#$%&'()*+-/<=>?@[]^_`{|}~";
let genPass = "";


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Generate password function, prompt user
function generatePassword() {
  // character length user prompt
  lengthPass = window.prompt("How many characters should your password be? (Should be between 8 and 128 characters)")

  //check if entry was a number
  if (Number.isNaN(lengthPass)) {
    window.alert("You must enter a number!");
    return null;
  };

  //check if number entered is > 8 and < 128
  if (lengthPass < 8 || lengthPass > 128) {
    alert(`Your password must be between 8 and 128 characters! You entered ${lengthPass}.`);
    return null;
  }

  // prompt if user would like numbers included in password
  let numbers = window.confirm("Would you like your password to include numbers?");

  // prompt if user would like upper case letters included
  let upperCase = window.confirm("Would you like your password to include upper case letters?");

  //prompt if user would like lower case letters included
  let lowerCase = window.confirm("Would you like your password to include lower case letters?");

  //prompt if user would like special characters included
  let special = window.confirm("Would you like your password to include special characters?");

  // check that user selected ok to at least one prompt
  if (numbers === false && upperCase === false && lowerCase === false && special === false) {
    window.alert('You must select OK for at least one prompt!')
    return null;
  };

  //assign selections to objects selections
  const selections = {
    numbers: numbers,
    lowerCase: lowerCase,
    upperCase, upperCase,
    special: special,
    lengthPass: lengthPass
  };
  // return combine function
  return combine (selections);
}

//add object selections to function to be combined
function combine (selections) {
  // if selections were selected, add them to genPass empty string
  if (selections.numbers === true) {
    genPass += numbersList
  };

  if (selections.lowerCase === true) {
    genPass += lowerCase
  };

  if (selections.upperCase === true) {
    genPass += upperCase
  };

  if (selections.special === true) {
    genPass += special;
  };

  // for loop by amount of times selected in lengthPass in generatePassword function
  let password = ""
  for (let i = 0; i < selections.lengthPass; i++) {
    password += genPass.charAt(Math.floor(Math.random() * genPass.length));
  };
  // returns password to writePassword function
  return password;
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
