function getComputerChoise() {
    let number =  Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        console.log("rock")
        return "rock";
    } else if (number == 2){
        console.log("paper")
        return "paper";
    } else if (number == 3){
        console.log("scissors")
        return "scissors";
    }
}



function getHumanChoise(){
    let userChoise = prompt("Rock, Paper, Scissors, GO!")
    return userChoise
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoise, computerChoise){
    humanChoise = humanChoise.toLowerCase();
    computerChoise = computerChoise.toLowerCase();

    if ((humanChoise == "rock") && (computerChoise == "scissors")) {
        humanChoise += 1    
        console.log("You Win! Rock beats Scissors!");
        }
    else if ((humanChoise =="paper") && (computerChoise == "rock")) {
        humanChoise += 1 
        console.log("You Win! Paper bests Rock!");
    }
    else if ((humanChoise == "scissors") && (computerChoise == "paper")){
        humanChoise += 1     
        console.log("You Win! Scissors beats Paper!");
    }
    else if ((humanChoise == "rock") && (computerChoise == "paper")) {
        computerChoise += 1 
        console.log("You Loose! Paper beats Rock!");
    }
    else if ((humanChoise =="paper") && (computerChoise == "scissors")){
        computerChoise += 1 
        console.log("You Loose! Scissors bests Paper!");
    }
    else if ((humanChoise == "scissors") && (computerChoise == "rock")){
        computerChoise += 1 
        console.log("You Loose! Rock beats Scissors!");
    }
    else if (humanChoise == computerChoise){
        console.log("It's a tie!")
    }

}

const humanSelection = getHumanChoise();
const computerSelection = getComputerChoise();

playRound(humanSelection, computerSelection);