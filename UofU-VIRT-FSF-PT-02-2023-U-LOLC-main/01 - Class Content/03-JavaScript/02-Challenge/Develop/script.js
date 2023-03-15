// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var response = confirm("How may characters? Choose between 8 and 128.")
  var passwordText = document.querySelector("#password");
    console.log(response)
};

if (!enter) {
  alert("This needs a value");
} else { (enter < 8 || enter > 128) 
enter = confirm(prompt("You must choose between 8 and 128"))
  number = confirm("Will this contain numbers?");
  character = confirm("Will this contain special characters?");
  uppercase = confirm("Will this contain Uppercase letters?");
  lowercase = confirm("Will this contain Lowercase letters?")
};

 if (!enter){ 
  number = confirm("Will this contain numbers?");
  character = confirm("Will this contain special characters?");
  uppercase = confirm("Will this contain Uppercase letters?");
  lowercase = confirm("Will this contain Lowercase letters?")};




  var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var password = "";
  for (i = 0; i <length; i++) {
    var random = math.floor(math.random()*4);
    switch (random) {
      case 0:
        if (lowercase === true) {
          random = math.floor(math.random() * lowercase.length);
          password += lowercase[random];
        }
        break;
        case 1:
          if (uppercase === true) {
            random = math.floor(math.random() * uppercase.length);
            password += uppercase[random];
        }
        break;
        case 2:
          if (numbers === true) {
            random = math.floor(math.random() * numbers.length);
            password += numbers[random];
        }
        break;
        case 3:
          if (character === true) {
            random = math.floor(math.random() * character.length);
            password += character[random];
        }
        break;
        case 4:
        break;
    }
  }

  generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.generateBtnElementById("password").placeholder = ps
  });
  
  function generatePassword() {
    enter = parseInt(prompt("How many characters? Choose between 8 and 128")
    )};
  



// Write password to the #password input


  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
