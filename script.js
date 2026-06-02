// Store choices in an array
const choices = ["Rock", "Paper", "Scissors"];

// Score object
const score = {
    player: 0,
    computer: 0
};

function playGame(playerChoice) {
    const turnDisplay = document.getElementById("turn");
    const resultDisplay = document.getElementById("result");

    // Show computer's turn
    turnDisplay.textContent = "Computer is choosing...";

    // Computer picks a random choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let result = "";

    // Decide winner using if/else
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        score.player++;
    } 
    else {
        result = "Computer wins!";
        score.computer++;
    }

    // Update result
    resultDisplay.innerHTML =
        `You chose <strong>${playerChoice}</strong><br>
         Computer chose <strong>${computerChoice}</strong><br>
         ${result}`;

    // Update score display
    document.getElementById("player-score").textContent = score.player;
    document.getElementById("computer-score").textContent = score.computer;

    // Reset turn message
    turnDisplay.textContent = "Your turn! Choose Rock, Paper, or Scissors.";
}
