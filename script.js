let choiceCpu;
let choicePlayer = prompt("Rock, Paper or Scissors?");
let result;

function caseSensitive() {
    return choicePlayer.toLocaleUpperCase().charAt(0).toUpperCase() + choicePlayer.slice(1);
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
                result = `You lose! ${choiceCpu} beats ${caseSensitive()}!`
                return result;
        } else if ((choiceCpu === "Rock" && choicePlayer === "paper")
            || (choiceCpu === "Paper" && choicePlayer === "scissors")
            || (choiceCpu === "Scissors" && choicePlayer === "rock")
            ) {
                result = `You won! ${caseSensitive()} beats ${choiceCpu}!`
                return result;
        } else {
            result = `It's a tie!`
            return result;
        }
    }

    console.log(playRound(choicePlayer, getComputerChoice()));
} else {
    alert("Wrong entry!");
}