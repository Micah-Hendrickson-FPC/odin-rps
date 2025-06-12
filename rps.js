"use strict";

playGame();

function getComputerChoice() {
    //Return a random value from [Rock, Paper, Scissors]
    let options = ["Rock", "Paper", "Scissors"];
    let selection = options[Math.floor(Math.random() * 3)];
    return selection; 
}

function getWinner(humanChoice, computerChoice) {
    //Declare a variable to store our result
    let result;

    //Create arrays to hold the possible win conditions. The first value stores the winning throw and
    // the second stores the losing throw.
    let rockWin = ["Rock", "Scissors"];
    let paperWin = ["Paper", "Rock"];
    let scissorsWin = ["Scissors", "Paper"];
    let winCons = [rockWin, paperWin, scissorsWin];

    //Evaluate ties
    if (humanChoice === computerChoice) {
        result = "Tie";
    //check for a winner
    } else {
        for (let i = 0; i < winCons.length; i++) {
            //If the human chose the first item in an array and the computer chose the second, the human
            // wins. Otherwise, the computer wins.
            if (humanChoice == winCons[i][0]) {
                if (computerChoice == winCons[i][1]) {
                    result = "Player";
                } else {
                    result = "Computer";
                }
            }
        }
    }

    //Return the result
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    const gameResults = document.createElement("div");

    rock.addEventListener("click", playRound("Rock"));
    paper.addEventListener("click", playRound("Paper"));
    scissors.addEventListener("click", playRound("Scissors"));

    /*if (humanScore > computerScore) {
        console.log("Congragulations! You won.");
    } else if (humanScore < computerScore) {
        console.log("You lost to the machine. Better luck next time.");
    } else {
        console.log("Its a draw!")
    }*/

    function playRound(humanChoice) {
        //Get the human and computer choices
        let computerChoice = getComputerChoice();

        //Determine the winner
        let winner = getWinner(humanChoice, computerChoice);
    
        //Tell the user the game is being played
        gameResults.textContent = "Rock\nPaper\nScissors\nShoot!\n" + 

        //Show the choices
        `You threw ${humanChoice}\n` + 
        `The computer threw ${computerChoice}\n`;

        //Show the winner and update the scores
        if (winner == "Tie") {
            console.log("You tied... :/");
        } else if (winner == "Player") {
            console.log(`You won! ${humanChoice} beats ${computerChoice.toLowerCase()}.`);
            humanScore++;
        } else {
            console.log(`You lost. ${computerChoice} beats ${humanChoice.toLowerCase()}.`);
            computerScore++;
        }
    
        //Display the scores
        console.log(`Current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
    }

}