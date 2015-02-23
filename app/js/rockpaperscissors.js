////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move? move : getInput();
    return move;
}

function getComputerMove(move) {
   move? move : randomPlay();
    
    return move;
}


function getWinner(playerMove,computerMove) {
    
    var winner;
     if (playerMove === computerMove) {
        return "tie";
    }
     else if (playerMove === "rock" && computerMove === "scissors") {
         winner = playerMove;
         return winner;
    }
     else if (playerMove === "rock" && computerMove === "paper"){
         winner = computerMove;
         return winner;
    }
     else if (playerMove === "paper" && computerMove === "rock") {
        winner = playerMove;
         return winner;
    }
     else if (playerMove === "paper" && computerMove === "scissors"){
         winner = computerMove;
         return winner;
    }
     else if (playerMove === "scissors" && computerMove === "rock"){
         winner = computerMove;
         return winner;
    }
     else if (playerMove === "scissors" && computerMove === "paper"){
         winner = playerMove;
         return winner;
    }
    
    
    else

    return [playerWins, computerWins];
}

var playerWins = 0;
var computerWins = 0;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    while (playerWins < 5 || computerWins < 5) {
    if (winner === playerMove) {
        playerWins ++;
        console.log("Player wins round. Total so far is player " + playerWins + "computer " + computerWins);
        
    }
    else if (winner === computerMove) {
        computerWins ++;
        console.log("Computer wins round.  Total so far is player " + playerWins + "computer " + computerWins);
    }
}
}

