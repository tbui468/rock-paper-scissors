const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const log = document.querySelector("#log");
let userHand = "paper";

rock.addEventListener('click', function(){userHand = "rock"});
paper.addEventListener('click', function(){userHand = "paper"});
scissors.addEventListener('click', function(){userHand = "scissors"});

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});


function computeAIHand() {
  let items = ["rock", "paper", "scissors"]
  return items[Math.floor(Math.random() * 3)]
}

function playRound() {
  let aiHand = computeAIHand()
  log.textContent = "You chose " + userHand + " and AI chose " + aiHand;
  switch(aiHand) {
    case "rock":
      if(userHand === "rock") {
        //do nothing
      }else if(userHand === "paper"){
        let currentScore = Number.parseFloat(playerScore.textContent);
        playerScore.textContent = currentScore + 1;
      }else if(userHand === "scissors"){
        let currentScore = Number.parseFloat(computerScore.textContent);
        computerScore.textContent = currentScore + 1;
      }
      break;
    case "paper":
      if(userHand === "rock"){
        let currentScore = Number.parseFloat(computerScore.textContent);
        computerScore.textContent = currentScore + 1;
      }else if(userHand === "paper") {
        //tie
      }else if(userHand === "scissors") {
        let currentScore = Number.parseFloat(playerScore.textContent);
        playerScore.textContent = currentScore + 1;
      }
      break;
    case "scissors":
      if(userHand === "rock") {
        let currentScore = Number.parseFloat(playerScore.textContent);
        playerScore.textContent = currentScore + 1;
      }else if(userHand === "paper") {
        let currentScore = Number.parseFloat(computerScore.textContent);
        computerScore.textContent = currentScore + 1;
      }else if(userHand === "scissors") {
        //tie
      }
      break;
  }
  if(Number.parseFloat(playerScore.textContent) === 5) {
    alert("You won!");
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    log.textContent = "";
  }else if(Number.parseFloat(computerScore.textContent) === 5) {
    alert("You lost!");
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    log.textContent = "";
  }
}

function playGame() {
  let result = playRound()
  console.log(result)
  let choice = window.prompt("Play again?  y/n", "n")

  if(choice === "y") return true
  else return false
}

