const choices = ["paper", "rock", "scissors"];

function getComputerChoice () {
	return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
	let computerScore = 0;
  let playerScore = 0;
	if (playerSelection == computerSelection) {
		return ("It's a tie!");
	}
	if (computerSelection == "rock") {
		if (playerSelection == "scissors") {
			return ("Computer wins!");
			computerScore++;
		}
		else {
			return ("Player wins!")
			playerScore++;
		}
	}
	if (computerSelection == "paper") {
		if (playerSelection == "rock") {
			return ("Computer wins!");
			computerScore++;
		}
		else {
			return ("Player wins!");
			playerScore++;
		}
	if (computerSelection == "scissors") {
		if (playerSelection == "paper") {
			return ("Computer wins!");
			computerScore++;
		}
		else {
			return ("Player wins!");
			playerScore++;
		}
	}
}
}

console.log("Player choice: " + playerSelection);
console.log("Computer choice: " + computerSelection);
console.log (playRound(playerSelection, computerSelection));

// everything above running well. 
// Function needs to loop 5x and count results

// function games () {
// 	for (let round = 0; round < 5; round++) {
// 		playRound();
// }
// }
