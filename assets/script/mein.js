const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const probabilityChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

probabilityChoices.forEach(probabilityChoices => probabilityChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    randomChoices();
    getResult();
}))

// computer random Choices
function randomChoices() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissor"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

// user Choices
function getResult() {
    if (computerChoice === userChoice) {
        result = " Draw!"
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        result = " You Win!"
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = " You Lost!"
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        result = " You Lost!"
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = " You Win!"
    }

    if (computerChoice === "scissor" && userChoice === "rock") {
        result = " You Win!"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = " You Lost!"
    }

    resultDisplay.innerHTML = result;
}