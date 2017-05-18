var winCounter = 0;
var lossCounter = 0;
var livesCounter = 10;

window.onload = function computerLetter() {

    var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    document.getElementById("lives").innerHTML = livesCounter;
    console.log(computerGuess);

	

	document.onkeyup = function(event) {

		var pressedKey = event.key;
		var userGuess = pressedKey.toLowerCase();
		var guessedLetters = document.getElementById("lettersGuessed");
		document.getElementById("wins").innerHTML = winCounter;
		document.getElementById("losses").innerHTML = lossCounter;
		console.log(userGuess);

		if (livesCounter > 0) {
			if (userGuess === computerGuess) {
				document.getElementById("wins").innerHTML = winCounter++;
				document.getElementById("lives").innerHTML = livesCounter--;
			}
			else if (userGuess != computerGuess) {
				document.getElementById("losses").innerHTML = lossCounter++;
				document.getElementById("lives").innerHTML = livesCounter--;
				guessedLetters.innerHTML = guessedLetters.innerHTML + userGuess + ", ";
			}
		}
		else {
			
			reset();
		}


		

	}

	function reset() {
		var winCounter = 0;
		var lossCounter = 0;
		var livesCounter = 10;
	}


}