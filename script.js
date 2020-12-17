// Assignment Code
var generateBtn = document.querySelector("#generate");
const pswd = [];
// Prompts and confirms to gather password information
var characterLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128")
console.log(characterLength)

var passNumbers = confirm("Click OK to include numbers.")
if (true === true) {
  pswd.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
}
console.log(pswd)

var passUppercase = confirm("Click OK to include uppercase letters.")
if (true === true) {
  pswd.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
}
console.log(pswd)

var passLowercase = confirm("Click OK to include lowercase letters.")
if (true === true) {
  pswd.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
}
console.log(pswd)

var passSpecialCh = confirm("Click OK to include special characters.")
if (true === true) {
  pswd.push("~", "!", "@", "#", "%", "^", "&", "*", "(", ")")
}
console.log(pswd)

var i;
var length = characterLength;
var text = ""

for (i = 0; i < pswd.length; i++) {
  text += pswd[i];
}

console.log(pswd)

document.getElementById("password").innerHTML = text;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);