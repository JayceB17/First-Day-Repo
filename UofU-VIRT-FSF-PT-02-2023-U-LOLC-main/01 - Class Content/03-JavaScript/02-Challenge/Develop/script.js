// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword(){
  var passwordstring= "";
  var password = generatePassword("How may characters? Choose between 8 and 128.")
  var passwordText = document.querySelector("#password");
  console.log(password)
    
    function generatePassword() {
      var enter = parseInt(prompt("How many characters? Choose between 8 and 128"))
      if (!enter) {
        alert("This needs a value");
      } else if  (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));
      
      }else { 
        number = confirm("Will this contain numbers?");
        character = confirm("Will this contain special characters?");
        uppercase = confirm("Will this contain Uppercase letters?");
        lowercase = confirm("Will this contain Lowercase letters?")
      };
      
        if (!character && !number && !uppercase && !lowercase) {
          choices = alert("You must choose a criteria!");
        }
        return enter
    };

    var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    for (i = 0; i < password; i++) {
      var random = Math.floor(Math.random()*4);
      console.log("password", password);
      console.log(random)
      switch (random) {
        
        case 0:
          if (lowercase === true) {
            random = Math.floor(Math.random() * lowercase.length);
            passwordstring += lowercase[random];
          }
          break;
          case 1:
            if (uppercase === true) {
              random = Math.floor(Math.random() * uppercase.length);
              passwordstring += uppercase[random];
          }
          break;
          case 2:
            if (numbers === true) {
              random = Math.floor(Math.random() * numbers.length);
              passwordstring += numbers[random];
          }
          break;
          case 3:
            if (character === true) {
              random = Math.floor(Math.random() * character.length);
              passwordstring += character[random];
          }
          break;
          case 4:
          break;
      }
  }

passwordText.value = passwordstring;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
