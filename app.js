let randomNumber;
let attempts = 0;
const maxRange = document.getElementById("maxRange");
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const rangeText = document.getElementById("rangeText");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const quitBtn = document.getElementById("quitBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
startBtn.addEventListener("click", function () {
    const max = Number(maxRange.value);
    // Check valid range
    if (max <= 0 || isNaN(max)) {
        message.textContent =
            "Please enter a valid maximum range!";
        message.className = "error";
        return;
    }

    // Generate random number
    randomNumber = Math.floor(Math.random() * max) + 1;

    // Reset attempts
    attempts = 0;

    attemptsText.textContent = attempts;

    // Show game range
    rangeText.textContent =
        `Guess a number between 1 and ${max}`;

    message.textContent =
        "Game started! Make your first guess.";

    message.className = "warning";

    // Show game area
    gameArea.classList.remove("hidden");

    // Clear input
    guessInput.value = "";

    // Focus input
    guessInput.focus();

    // Disable max range and start button
    maxRange.disabled = true;
    startBtn.disabled = true;

    // Enable game controls
    guessInput.disabled = false;
    guessBtn.disabled = false;
});


// Guess Button
guessBtn.addEventListener("click", function () {

    const guess = Number(guessInput.value);

    // Validate guess
    if (!guessInput.value || guess <= 0) {

        message.textContent =
            "Please enter a valid number!";

        message.className = "error";

        return;
    }

    // Increase attempts
    attempts++;

    attemptsText.textContent = attempts;


    // Correct Guess
    if (guess === randomNumber) {

        message.textContent =
            `Congratulations! You Won in ${attempts} attempts!`;

        message.className = "success";

        // Disable guessing
        guessBtn.disabled = true;
        guessInput.disabled = true;

        // Refresh the page after 2 seconds
        setTimeout(function () {

            location.reload();

        }, 2000);

    }


    // Guess is greater than random number
    else if (guess > randomNumber) {

        message.textContent =
            "Your guess is too high! Try again.";

        message.className = "error";

    }


    // Guess is smaller than random number
    else {

        message.textContent =
            "Your guess is too low! Try again.";

        message.className = "error";

    }


    // Clear input after guess
    guessInput.value = "";

    // Focus input again
    guessInput.focus();

});


// Quit Game
quitBtn.addEventListener("click", function () {

    message.textContent =
        `You quit the game! The correct number was ${randomNumber}.`;

    message.className = "warning";

    // Disable game controls
    guessBtn.disabled = true;
    guessInput.disabled = true;

});