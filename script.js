function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1 :
            return "Rock";
            break;
        case 2 :
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function calculateResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS")
        || (playerSelection == "PAPER" && computerSelection == "ROCK")
        || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

        return `You win, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()} !`;

        }
    else if (playerSelection == computerSelection) {
        return 'Draw !';
    }
    else {
        return `You lose, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()} !`;
    }
}

function game() {
    while(true) {
        let computerChoice = computerPlay();
        // let playerChoice = prompt("What do you play? (Rock, Paper or Scissors) : ");

        if (playerChoice.toUpperCase() == "ROCK" || playerChoice.toUpperCase() == "PAPER" || playerChoice.toUpperCase() == "SCISSORS" ) {
            alert(`${calculateResult(playerChoice, computerChoice)}`);
        }
        else {
            continue;
        }
    }

}

game();
alert("Game Over");
