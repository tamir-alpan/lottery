var compSelect = getComputerSelection();

function getComputerSelection() {
    return Math.floor(1 + Math.random() * 4);
}

function getUserSelection(userInput) {
    if (isWin(userInput)) {
        alert("you win");
    } else {
        alert("you loose the computer chose " + compSelect + " and you chose " +userInput );
    }
}

function isWin(num) {
    return compSelect === num;
}
