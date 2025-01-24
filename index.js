function getComputerChoise() {
    let number =  Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        console.log("Computer chose: rock")
        return "rock";
    } else if (number == 2){
        console.log("Computer chose: paper")
        return "paper";
    } else if (number == 3){
        console.log("Computer chose: scissors")
        return "scissors";
    }
}



function getHumanChoise(){
    /*while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please type Rock, Paper, or Scissors:").toLowerCase();
    }*/
    let humanChoise = prompt("Rock, Paper, Scissors, GO!").toLowerCase()
    console.log(`You chose: ${humanChoise}`);
    return humanChoise;
}



function playRound(humanChoise, computerChoise){
    
    if (
        (humanChoise === "rock") && (computerChoise == "scissors") ||
        (humanChoise === "paper") && (computerChoise === "rock") ||
        (humanChoise === "scissors") && (computerChoise) 
    ){
        //humanScore += 1    
        console.log(`You Win! ${humanChoise.charAt(0).toUpperCase() + humanChoise.slice(1)} beats ${computerChoise}`);
        return "human";
        }
    
    else if (
        (humanChoise == "rock") && (computerChoise == "paper") ||
        (humanChoise === "paper") && (computerChoise === "scissors") ||
        (humanChoise === "scissors") && (computerChoise === "rock") 
    ) {
        //computerScore += 1 
        console.log(`You Loose! ${computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)} beats ${humanChoise}!`);
         return "computer"
    }
    else{
        console.log("It's a tie!");
        return "tie";
    }

}






function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoise = getHumanChoise();
        const computerChoise = getComputerChoise();
        const result = playRound(humanChoise, computerChoise);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
      }
      console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);
      if (humanScore  > computerScore) {
        console.log("Congradulations! You won the game!");
      } else if (humanScore < computerScore){
        console.log("You lost the game :( Better luck next tiem!")
      } else {
        console.log("It's a tie!")
      }
}

playGame();