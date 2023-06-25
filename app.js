const startGameBtn = document.getElementById('start-game-btn');

const Rock = "ROCK";
const Paper = "PAPER";
const Scisscor = "SCISSOR";
const DefaultChoice = "ROCK";

let isGameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt (`${Rock} or ${Paper} or ${Scisscor}?`, '').toUpperCase();
  if (selection !== "ROCK" && selection !== "PAPER" && selection !== "SCISSOR") {
    alert(`we are choosing ${DefaultChoice} for you`);  
    return;
  }
  return selection;

};

const getComputerChoice = () => {
  let num = Math.random()
  console.log(num);
  if (num < 0.34){
    return "ROCK";
  }
  else if ( num >= 0.34 && num <= 0.75)
  {
    return "PAPER";
  }
  else {
    return "SCISSOR";
  }
};

const getWinner = (playerChoice,computerChoice) => {
    if (playerChoice == computerChoice){
      alert("Draw");
    }
    else if(playerChoice == "ROCK" && computerChoice == "PAPER" ||
            playerChoice == "SCISSOR" && computerChoice == "ROCK" ||
            playerChoice == "PAPER" && computerChoice == "SCISSOR") 
     {
      alert("computer wins");

    }
    else {
      alert("player wins")
    }
};

startGameBtn.addEventListener('click', () => {
  if(isGameRunning){
    return;
  }

  isGameRunning = true;

  console.log("Game is running......");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(playerChoice,computerChoice);
  
  console.log("player choice :", playerChoice);
  console.log("computer choice :", computerChoice);

});

