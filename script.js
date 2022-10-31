const playerSelection = document.querySelector('#playerSelection');
const computerSelection = document.querySelector('#computerSelection');
const resultText = document.querySelector('#resultText');
const choiceButtons = document.querySelectorAll('.Choicebtn');

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  computerTurn ();
  playerSelection.textContent = `Player: ${player}`;
  computerSelection.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Rock";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissors";
        break;
    }
}

function checkWinner() {
  if(player == computer){
    return "Draw";
  }
  else if (computer == "Rock"){
    return(player == "Paper") ? "You Win" : "You lose!"
  }
  else if (computer == "Paper"){
    return(player == "Scissors") ? "You Win" : "You lose!"
  }
  else if (computer == "Scissors"){
    return(player == "Rock") ? "You Win" : "You lose!"
  }
}