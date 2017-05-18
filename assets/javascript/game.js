

window.onload = function computerLetter() {
	//set alphabet for letter choices
    var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //setting counters up for start
    var winCounter = 0;
	var lossCounter = 0;
	var livesCounter = 10;
	var computerGuess = "";

	//computer picks a letter
    function newLetter() {
    	 computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
         console.log(computerGuess);
    }
    newLetter();


    //Place livesCounter into the lives Div
    document.getElementById("lives").innerHTML = livesCounter;

	document.onkeyup = function(event) {
		//User guesses and forces lowercase
		var pressedKey = event.key;
		var userGuess = pressedKey.toLowerCase();

		//Setting up counters and guessed letters
		var guessedLetters = document.getElementById("lettersGuessed");
		document.getElementById("wins").innerHTML = winCounter;
		document.getElementById("losses").innerHTML = lossCounter;
		console.log(userGuess);
		

		if (livesCounter > 0) {
            livesCounter--;
            if (userGuess === computerGuess) {
                winCounter++;
                document.getElementById("wins").innerHTML = winCounter;
                document.getElementById("lives").innerHTML = livesCounter;
                newLetter();
            }
            else if (userGuess != computerGuess) {
                lossCounter++;
                document.getElementById("losses").innerHTML = lossCounter;
                document.getElementById("lives").innerHTML = livesCounter;
                guessedLetters.innerHTML = guessedLetters.innerHTML + userGuess + ", ";                
            }
        }
        else {
            winCounter = 0;
            lossCounter = 0;
            livesCounter = 10;
            document.getElementById("wins").innerHTML = winCounter;
            document.getElementById("lives").innerHTML = livesCounter;
            document.getElementById("losses").innerHTML = lossCounter;
            guessedLetters.innerHTML = "";
            newLetter();

        }
	}
}