function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return (random, choice[random]);
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Pick a choice", "");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection, computerSelection);
    if(playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats rock.";
    } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats scissors.";
    } else if(playerSelection == "Rock" && computerSelection == "Rock") {
        return "Tie.";
    } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats paper.";
    } else if(playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats scissors.";
    } else if(playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Tie.";
    } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats paper.";
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats rock.";
    } else  if(playerSelection == "Paper" && computerSelection == "Paper") {
        return "Tie.";
    } else {
        return "That is not a choice.";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let step = 0; step < 5; step++) {
        playRound();
        if(playRound().includes("You Win!")) {
            playerScore++;
        } else if(playRound().includes("You Lose!")) {
            computerScore++;
        } else {
            console.log("Tie");
        }
        console.log(playerScore, computerScore);
        if(playerScore > computerScore) {
            return "You Won!";
        } else if(computerScore > playerScore) {
            return "You Lost!"
        } else {
            return "Draw"
        }
    }
}