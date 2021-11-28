// Assignment code here
const numbersList = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!#$%&'()*+-/<=>?@[]^_`{|}~";
let lengthPass = "";
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
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
