let choiceCpu;
let result;
let score;
let playerScore = 0;
let cpuScore = 0;
let round = 1;

function playGame() {

    while (round < 6) {

        console.log(`Round: ${round}`);

        let choicePlayer = prompt("Rock, Paper or Scissors?");

        function caseSensitive() {
            choicePlayer = choicePlayer.toLowerCase();
            return choicePlayer.charAt(0).toUpperCase() + choicePlayer.slice(1);
        }

        if (caseSensitive() === "Rock" || caseSensitive() === "Paper" || caseSensitive() === "Scissors") {

            function getComputerChoice() {
                let random = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
                if (random === 1) {
                    choiceCpu = "Rock";
                    console.log(`CPU: ${choiceCpu}`);
                    return choiceCpu;
                } else if (random === 2) {
                    choiceCpu = "Paper";
                    console.log(`CPU: ${choiceCpu}`);
                    return choiceCpu;
                } else {
                    choiceCpu = "Scissors";
                    console.log(`CPU: ${choiceCpu}`);
                    return choiceCpu;
                }
            }

            function playRound(playerSelection, computerSelection) {
                if ((choiceCpu === "Rock" && choicePlayer === "scissors")
                    || (choiceCpu === "Paper" && choicePlayer === "rock")
                    || (choiceCpu === "Scissors" && choicePlayer === "paper")
                    ) {
                        cpuScore++;
                        result = `You lose! ${choiceCpu} beats ${caseSensitive()}!\nScore:\nPlayer = ${playerScore} : CPU = ${cpuScore}\n `;
                        return result;
                } else if ((choiceCpu === "Rock" && choicePlayer === "paper")
                    || (choiceCpu === "Paper" && choicePlayer === "scissors")
                    || (choiceCpu === "Scissors" && choicePlayer === "rock")
                    ) {
                        playerScore++;
                        result = `You won! ${caseSensitive()} beats ${choiceCpu}!\nScore:\nPlayer = ${playerScore} : CPU = ${cpuScore}\n `;
                        return result;
                } else {
                    result = `It's a tie!\nScore:\nPlayer = ${playerScore} : CPU = ${cpuScore}\n `;
                    return result;
                }
            }

            console.log(`Player: ${caseSensitive()}`);
            console.log(playRound(choicePlayer, getComputerChoice()));

            round++;

        } else {
            alert("Wrong entry!");
        }
    }
}

playGame();

if (playerScore > cpuScore) {
    console.log("CONGRATULATIONS! YOU WON!");
} else if (playerScore < cpuScore) {
    console.log("You lose! Sorry :(");
} else {
    console.log("It's a tie! Try again?");
}