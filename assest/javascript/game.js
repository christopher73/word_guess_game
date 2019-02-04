//let words = ["Jose1", "Luis2", "Noel3", "Mike4"];

let pokemons = [
  { name: "Ditto", img: "./assest/images/ditto.png" },
  { name: "Dragonite", img: "./assest/images/dragonite.png" },
  { name: "Electrode", img: "./assest/images/electrode.png" },
  { name: "Ivysaur", img: "./assest/images/ivysaur.png" },
  { name: "Lickitung", img: "./assest/images/lickitung.png" },
  { name: "Magmar", img: "./assest/images/magmar.png" },
  { name: "Mr. Mime", img: "./assest/images/mr.mime.png" },
  { name: "Slowking", img: "./assest/images/slowking.png" }
];

console.log(pokemons[0].name);

var guess_text = document.getElementById("guess_text");
var line_text = document.getElementById("line_text");
var score = document.getElementById("score");
guess_text.textContent = "Press a letter to start guessing !!!";

function game() {
  var word = pokemons[Math.floor(Math.random() * pokemons.length)]; //math random picks a randon number between 0 to 1

  var secret_word = word.name.split("");
  console.log(word);
  var life = word.name.length * 2; // This function is run whenever the user presses a key.

  var line = [];
  for (var i = 0; i < secret_word.length; i++) {
    line[i] = "_";
  }

  document.onkeyup = function(e) {
    var userGuess = e.key; // Determines which key was pressed.
    if (life > 0) {
      //console.log(userGuess);
      //console.log(life);
      for (var j = 0; j < secret_word.length; j++) {
        if (
          userGuess.toLocaleLowerCase() === secret_word[j].toLocaleLowerCase()
        ) {
          line[j] = secret_word[j];
          line_text.textContent = line.join(" ");
          life++;
        }
      }
      if (word.name === line.join("")) {
        score.textContent = "Yes, It's " + word.name + " !!!";
        life = 0;
      } else {
        line_text.textContent = line.join(" ");
        score.textContent = "You have " + life + " more tries";
        document.getElementById("img").src = word.img;
        //console.log(word.img);
        life--;
      }
    } else score.textContent = "Press Reload to play again !!!";
  };
}

game();
