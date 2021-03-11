// Global Variables
let playerScore = Number(document.getElementById("player-score").textContent);
let computerScore = Number(document.getElementById("computer-score").textContent);
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const resultText = document.getElementById("result-text");

// Function that randomizes computer's choice
function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1 :
            return "rock";
            break;
        case 2 :
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

// Function that calculates result based on two inputs
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

// Main function
function game(e) {
        // Checking if game over
        if (playerScore == 5 || computerScore == 5) {
            resultText.textContent = "Game Over! Reload the page to play again."
            return;
        }
        else {
            // Variables
            let computerChoice = computerPlay();
            let playerChoice = e.target.id;
            // Adjusting the scoreboard images
            playerImage.src = `resources/${playerChoice}.svg`;
            computerImage.src = "";
            setTimeout(function() {computerImage.src = `resources/${computerChoice}.svg`}, 1000);
            // Modifying the result text
            resultText.textContent = "waiting...";
            setTimeout(function() {resultText.textContent = `${calculateResult(playerChoice, computerChoice)}`}, 1000);
            // Adjusting the score
            if (calculateResult(playerChoice, computerChoice).indexOf("win") > -1) playerScore++;
            else if (calculateResult(playerChoice, computerChoice) == "Draw !");
            else computerScore++;
            // Updating the score in HTML
            setTimeout(function() {document.getElementById("player-score").textContent = playerScore}, 1000);
            setTimeout(function() {document.getElementById("computer-score").textContent = computerScore}, 1000);
            // Console logging for debug
            console.log("player score : " + playerScore);
            console.log("computer score : " + computerScore)
            console.log(playerChoice);
            console.log(computerChoice);
            console.log(gameOver); 
        }
        
}

const choice_icons = Array.from(document.getElementsByClassName("choice-icon"));
choice_icons.forEach(icon => icon.addEventListener('click', game));



