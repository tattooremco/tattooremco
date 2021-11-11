const username = prompt("Welcome! What is your name?");
alert("Hey " + username + "!");
let numA = prompt("What is the smallest number you'll choose?");
let numB = prompt("What is the largest number you'll choose?");

let riddle = function (min, max) {
    let correctAnswer = Math.floor(Math.random() * (numB - numA) + numA);
    console.log(correctAnswer);
    let answerToNumber = prompt(`Pick a number from ${numA} to ${numB} to start the game`);
    i = 0;
    while (answerToNumber != correctAnswer && i < 5) {
        if (i == 4) {
            alert(`Unfortunately, that is not correct! You only have 1 guess left`);
        } else {
            alert(`Unfortunately, that is not correct! You have ${5 - i} guesses left`);
        }

        answerToNumber = prompt("Try another number");
        i++
    }
    if (answerToNumber == correctAnswer) {
        alert("Congratulations, you have won the game!");
        return alert("Bye " + username + " hope to see you again!");
    } else {
        alert("No more guesses left, sorry but this is the end of the game");
        return alert("Bye " + username + " hope to see you again!");
    }

}
riddle(numA, numB);