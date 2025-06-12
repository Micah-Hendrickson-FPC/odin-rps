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
    let WIN_CON = 5;

    const body = document.querySelector("body");

    createButtons();

    const gameResults = document.createElement("div");
    body.appendChild(gameResults);

    function playRound(humanChoice) {
        while (gameResults.firstChild) {
            gameResults.removeChild(gameResults.lastChild);
        }

        //Get the human and computer choices
        let computerChoice = getComputerChoice();

        //Determine the winner
        let winner = getWinner(humanChoice, computerChoice);
    
        //Tell the user the game is being played
        output("Rock\nPaper\nScissors\nShoot!\n"); 

        //Show the choices
        output(`You threw ${humanChoice}.\n`); 
        output(`The computer threw ${computerChoice}.\n`);

        //Show the winner and update the scores
        if (winner == "Tie") {
            output("You tied... :/");
        } else if (winner == "Player") {
            output(`You won! ${humanChoice} beats ${computerChoice.toLowerCase()}.`);
            humanScore++;
        } else {
            output(`You lost. ${computerChoice} beats ${humanChoice.toLowerCase()}.`);
            computerScore++;
        }
    
        //Display the scores
        output(`Current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);

        if (humanScore >= WIN_CON) {
            output("Congragulations! You won.");
        } else if (computerScore >= WIN_CON) {
            output("You lost to the machine. Better luck next time.");
        }
    }

    function createButtons() {
        const rock = document.createElement("button");
        const paper = document.createElement("button");
        const scissors = document.createElement("button");

        rock.textContent = "Rock";
        paper.textContent = "Paper";
        scissors.textContent = "Scissors";

        rock.addEventListener("click", () => playRound("Rock"));
        paper.addEventListener("click", () => playRound("Paper"));
        scissors.addEventListener("click", () => playRound("Scissors"));

        body.appendChild(rock);
        body.appendChild(paper);
        body.appendChild(scissors);
    }

    function output(text) {
        const toOutput = document.createElement("p");
        toOutput.textContent = text;
        gameResults.appendChild(toOutput);
    }
}

