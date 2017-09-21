//////variables//////

var numLosses=0;
var numWins=0;
var numRemainingGuesses = 10;
var wordList = ["KEY", "APPLE", "NERDS", "RAISIN","RAMEN", "SHOELACE"];
var letterChoice;
var lettersGuessed = "";
var lettersMatched = " ";
var lettersMatchedNoSp
var compWordChoice = wordList[Math.floor(Math.random() * wordList.length)];
var numLettersCorrect=0;
var spaceCount;

var printLettersMatched = document.getElementById("letters-matched");
var printNumWins = document.getElementById("num-wins")
var printLetterChoice = document.getElementById("letter-choice");
var printNumRemainingGuesses = document.getElementById("num-remaining-guesses")
var printLettersGuessed = document.getElementById("letters-guessed")
var printNumLosses = document.getElementById("num-losses")

//////functions//////

//>>-------->>> Places a _ in lettersMatched for each of the computerGuessed characters
function drawBlanks(){	
	lettersMatched="_";
	for(i=1; i<compWordChoice.length; i++){

		lettersMatched = lettersMatched + " _"

	}
	printLettersMatched.textContent = lettersMatched
	return lettersMatched
}

function replaceLetters(){ 
	for(i=0; i<compWordChoice.length; i++){
		if(compWordChoice[i]===letterChoice){
			lettersMatched=lettersMatched.substr(0,(i*2))+(letterChoice)+lettersMatched.substr((i*2)+1);
			numLettersCorrect = numLettersCorrect+1;

		}
	}
}

function checkWin(){
	if(numLettersCorrect === compWordChoice.length){
		numWins++;
		document.getElementById('close-up-image').src = "https://nicholasvree.github.io/hangman2/assets/images/" + compWordChoice + "rev.jpg";
	}
	else if(numRemainingGuesses === 0){
		numLosses++;
		document.getElementById('close-up-image').src = "https://nicholasvree.github.io/hangman2/assets/images/" + compWordChoice + "rev.jpg";
		newRound();
	}	
}

function resetGame(){
	newRound();
	document.getElementById('close-up-image').src = "https://nicholasvree.github.io/hangman/assets2/images/" + compWordChoice + ".jpg";
}

function logLetters(){
	if(lettersGuessed.indexOf(letterChoice)===-1){
		lettersGuessed =  lettersGuessed + ", "+letterChoice
	}
}

function newRound(){
	numRemainingGuesses = 10;
	letterChoice = "";
	lettersGuessed = "";
	compWordChoice = wordList[Math.floor(Math.random() * wordList.length)];
	lettersMatched = drawBlanks()
	numLettersCorrect=0;
	
	printNumRemainingGuesses.textContent = numRemainingGuesses;
	printLettersGuessed.textContent = lettersGuessed;
	printLetterChoice.textContent=letterChoice;
	printLettersMatched.textContent = lettersMatched
	printNumWins.textContent = numWins
	printNumLosses.textContent = numLosses


	console.log(compWordChoice)
	console.log("letterChoice:" + letterChoice)
	console.log("lettersGuessed" + lettersGuessed)
	console.log("lettersMatched" + lettersMatched)
	console.log("")
}

////////main////////

drawBlanks()
console.log(compWordChoice)
document.getElementById('close-up-image').src = "https://nicholasvree.github.io/hangman2/assets/images/" + compWordChoice + ".jpg";


	document.onkeyup = function(event){
		letterChoice = event.key;
		letterChoice = letterChoice.toUpperCase();
		if(letterChoice.length === 1 && letterChoice.match(/[a-z]/i) && lettersGuessed.indexOf(letterChoice) === -1){
			numRemainingGuesses--
			logLetters()
			printNumRemainingGuesses.textContent = numRemainingGuesses;
			printLettersGuessed.textContent = lettersGuessed;
			printLetterChoice.textContent=letterChoice;
			replaceLetters()
			printLettersMatched.textContent = lettersMatched
			checkWin()
			printNumWins.textContent = numWins
			printNumLosses.textContent = numLosses

		}

	}


