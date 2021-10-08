let sum = 0;
let cards = [];

let hasBlackjack = false;
let isInGame = false;

let messageText = document.getElementById('display-text');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.querySelector('#player-el');

let player = {
    name: "Abi",
    chips: 327
}

playerEl.textContent = player.name + ": Php " + player.chips;

function getRandomCard() {
    let rNum = Math.floor(Math.random() * 13) + 1;

    if (rNum === 1) {
        return 11;
    }
    else if (rNum > 10) {
        return 10;
    }
    else {
        return rNum;
    }
}

function startGame() {
    isInGame = true;
    for (let i = 0; i <= 1; i++) {
        cards.push(getRandomCard())
    }

    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }

    renderGame();
}

function renderGame() {
    let cardCount = cards.length;
    cardsEl.textContent = 'Cards: ';

    for (let i = 0; i < cardCount; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent += (sum + ' ');

    if (sum <= 20) {
        messageText.textContent = "Do you want to draw a new card?";
    }

    else if (sum === 21) {
        messageText.textContent = "You've got Blackjack!";
        hasBlackjack = true;
    }

    else {
        messageText.textContent = "You're out of the game.";
        isInGame = false;
    }
}

function newCard() {
    if (isInGame === true && !hasBlackjack) {
        let newCard = getRandomCard();

        sum += newCard;
        cards.push(newCard);

        renderGame();
    }
}
