let firstCard = 2;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isInGame = true;
let message = "";

if(sum <= 20) {
    message = "Do you want to draw a new card?"
}

else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
}

else {
    message = "You're out of the game.";
    isInGame = false;
}

console.log(message);
