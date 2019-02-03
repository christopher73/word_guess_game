let words = ["Jose1", "Luis2", "Noel3", "Mike4"];
var guess_text = document.getElementById("guess_text");
var line_text = document.getElementById("line_text");
guess_text.textContent = "Click a letter to start guessing";

function game() {
  var word = words[Math.floor(Math.random() * words.length)]; //math random picks a randon number between 0 to 1
  var secret_word = word.split("");
  console.log(word);
  var life = word.length * 2; // This function is run whenever the user presses a key.

  var line = [];
  for (var i = 0; i < secret_word.length; i++) {
    line[i] = "_";
  }

  document.onkeyup = function(e) {
    var userGuess = e.key; // Determines which key was pressed.

    if (life > 0) {
      console.log(userGuess);
      console.log(life);

      for (var j = 0; j < secret_word.length; j++) {
        if (
          userGuess.toLocaleLowerCase() === secret_word[j].toLocaleLowerCase()
        ) {
          line[j] = secret_word[j];
          line_text.textContent = line.join(" ");
          life++;
        }
      }

      if (word === line.join("")) {
        p4.textContent = "you won";
        life = 0;
      } else {
        line_text.textContent = line.join(" ");
        life--;
      }
    }
  };
}
