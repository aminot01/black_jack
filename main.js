// these variables store the buttons that operate the game
let hit = document.getElementById("hit");
let stay = document.getElementById("stay");
let playAgain = document.getElementById('play_again');

// array for possible card values
let cardVals = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

// variables to save dealer and players soft and hard scores
let dealerSoftScore = 0;
let dealerHardScore = 0;
let playerSoftScore = 0;
let playerHardScore = 0;

// key used to create id for new player cards
let playerCardId = 3

// anonymous event handler property and function for the hit button
hit.onclick = function(event) {
    let newCard = document.createElement("section");
    let id = "playersCard" + playerCardId;
    playerCardId += 1;
    newCard.setAttribute("id", id);
    newCard.setAttribute("class", "card");
    newCard.innerHTML = cardVals[Math.floor(Math.random() * cardVals.length)];
    document.getElementById("players_hand").appendChild(newCard);
}