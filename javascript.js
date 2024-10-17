function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
  }

function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === computerSelection) {
        return "You both chose the same. It's a tie!";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        return "Paper folds the rock. Computer wins!";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        return "Rock smashes the scissors. You win!";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        return "Paper folds the rock. You win!";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        return "Scissors cut the paper. Computer wins!";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        return "Rock smashes the scissors. Computer wins!";
    } else {
        return "Scissors cut the paper. You win!";
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        const humanSelection = prompt("Choose rock, paper or scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result.includes("You")) {
            humanScore++;
        } else if (result.includes("Computer")) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}

playGame()









