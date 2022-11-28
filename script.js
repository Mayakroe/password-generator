// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword() {
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
  var lowerCase = confirm ("Do you want lowercase characters?")
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var upperCase = confirm ("Do you want uppercase characters?")
  var numberChar = "0123456789"
  var numbers = confirm ("Do you want numbers?")
  var specialChar = "@#$%_-*&"
  var special = confirm ("Do you want special characters?")
  var charSet = ""
  //check if user picked lower case
  charSet += lowerCase
  var passwordLength = prompt ("How long is the password?");
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*charSet.length)
    password += charSet.charAt(randomNumber)
  }
  return password
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


//prompt("Password Length?")
//window.confirm
//window.alert
//prompts: password length? character type?
//var length = 8
//charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#*$-_
//criteria
//length - atleast 8 no more than 128
//(Math.floor(Math.random))
//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#*$-_
//if else statement 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
//document.getElementById("generateBtn").addEventListener("click", ?)

