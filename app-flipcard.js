document.addEventListener('DOMContentLoaded', createGameBoard);

const cardArray = [{
    name: "card-1",
    image: "images/Card_1.jpg"
},{
    name: "card-1",
    image: "images/Card_1.jpg"
},{
    name: "card-2",
    image: "images/Card_2.jpg"
},{
    name: "card-2",
    image: "images/Card_2.jpg"
},{
    name: "card-3",
    image: "images/Card_3.jpg"
},{
    name: "card-3",
    image: "images/Card_3.jpg"
},{
    name: "card-4",
    image: "images/Card_4.jpg"
},{
    name: "card-4",
    image: "images/Card_4.jpg"
},{
    name: "card-5",
    image: "images/Card_5.jpg"
},{
    name: "card-5",
    image: "images/Card_5.jpg"
},{
    name: "card-6",
    image: "images/Card_6.jpg"
},{
    name: "card-6",
    image: "images/Card_6.jpg"
},{
    name: "card-7",
    image: "images/Card_7.jpg"
},{
    name: "card-7",
    image: "images/Card_7.jpg"
},{
    name: "card-8",
    image: "images/Card_8.jpg"
},{
    name: "card-8",
    image: "images/Card_8.jpg"
},{
    name: "card-9",
    image: "images/Card_9.jpg"
},{
    name: "card-9",
    image: "images/Card_9.jpg"
},{
    name: "card-10",
    image: "images/Card_10.jpg"
},{
    name: "card-10",
    image: "images/Card_10.jpg"
},{
    name: "card-11",
    image: "images/Card_11.jpg"
},{
    name: "card-11",
    image: "images/Card_11.jpg"
},{
    name: "card-12",
    image: "images/Card_12.jpg"
},{
    name: "card-12",
    image: "images/Card_12.jpg"
}];

function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = "grid";

    for (let i = 0; i < 24; i++) {
        let item = document.createElement('div');
        item.className = 'item';

        let card = document.createElement('img');
        card.setAttribute('src','images/Card_0.jpg');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);

        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    
    gameboard.appendChild(gridContainer);

    cardArray.sort(() => 0.5 - Math.random())
}

let cardChosen = []
let cardChosenId = []
let score = 0

function flipCard() {
    let cardId = this.getAttribute('id');
    this.setAttribute('src', cardArray[cardId].image);
    cardChosen.push(cardArray[cardId]);
    cardChosenId.push(cardId);
    if (cardChosen.length === 2) {
        document.getElementById("gameConsole").textContent = "Checking....."
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChosenId[0];
    let selectedCardTwo = cardChosenId[1];

    let consoleMessage = "";

    if (cardChosen[0].name === cardChosen[1].name) {
        cards[selectedCardOne].setAttribute('src', 'images/Card_00.png');
        cards[selectedCardTwo].setAttribute('src', 'images/Card_00.png');
        score = score + 1;
        consoleMessage = "You found a match!!"

    }else{
        cards[selectedCardOne].setAttribute('src', 'images/Card_0.jpg');
        cards[selectedCardTwo].setAttribute('src', 'images/Card_0.jpg');
        consoleMessage = "Sorry, try again..."
    }

    document.getElementById('gameScore').textContent = score;
    document.getElementById("gameConsole").textContent = consoleMessage;

    cardChosen = []
    cardChosenId = []

    if (score === cardArray.length / 2) {
        document.getElementById("gameConsole").textContent = 'Congratulations! You found them all.'
    }
}