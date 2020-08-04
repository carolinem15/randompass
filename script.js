// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = x
var number = 0123456789
var lowercase = abcdefghijklmnopqrstuvwxyz
var letter = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
var specialCharacters = ~!@#%^&*()

// Write password to the #password input
function writePassword() {
  for (i = 0; i < password.length; i++) {
    text += password[i] + "<br>";
  };
  
var password = generatePassword() {
  var characterLength = prompt("How many characters would you like your password to be? Note: your password must be between 8 and 128 characters.");
console.log(characterLength);
var number = confirm("Would you like your password to include numbers?");
if true {
  var number = Math.floor(Math.random() * 10) + 1,);
}
console.log(number);
var uppercase = confirm("Would you like your password to include uppercase letters?");
if true {
  var letter = letters[Math.floor(Math.random() * letters.length)];
} else { 
  var lowercase = lowercase[Math.floor(Math.random() * lowercase.length)]; }
console.log(uppercase);
var specialCharacters = confirm("Would you like your password to include special characters?");
if true {
  var specialCharacters = Math.floor(Math.random() * specialCharacters.length)];
}
console.log(specialCharacters);
}

var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);