// these variables store the buttons that operate the game
const hit = document.getElementById("hit");
const stay = document.getElementById("stay");
const playAgain = document.getElementById('play_again');

// array for possible card values
const cardVals = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

// variables to save dealer and players soft and hard scores
let dealerSoftScore = 0;
let dealerHardScore = 0;
let playerSoftScore = 0;
let playerHardScore = 0;

// function that returns random card value
function getRandomCardVal() {
    return cardVals[Math.floor(Math.random() * cardVals.length)];
}

// function that updates players soft and hard scores based on cards in their hand
function updatePlayerScores() {

    // resets the score that is being updated
    playerSoftScore = 0;
    playerHardScore = 0;

    // update score of specified party
    let cards = document.getElementById("players_hand").children
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].innerHTML == "J" || cards[i].innerHTML == "Q" || cards[i].innerHTML == "K" || cards[i].innerHTML == "J") {
            playerSoftScore += 10;
            playerHardScore += 10;
        }
        else if (cards[i].innerHTML == "A") {
            playerSoftScore += 10;
            playerHardScore += 1;
        }
        else {
            playerSoftScore += Math.floor(cards[i].innerHTML);
            playerHardScore += Math.floor(cards[i].innerHTML);
        }
    }
}

// function that updates dealers soft and hard scores based on cards in their hand
function updateDealerScores() {

    // resets the score that is being updated
    dealerSoftScore = 0;
    dealerHardScore = 0;

    // update score of specified party
    let cards = document.getElementById("dealers_hand").children
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].innerHTML == "J" || cards[i].innerHTML == "Q" || cards[i].innerHTML == "K" || cards[i].innerHTML == "J") {
            dealerSoftScore += 10;
            dealerHardScore += 10;
        }
        else if (cards[i].innerHTML == "A") {
            dealerSoftScore += 10;
            dealerHardScore += 1;
        }
        else {
            dealerSoftScore += Math.floor(cards[i].innerHTML);
            dealerHardScore += Math.floor(cards[i].innerHTML);
        }
    }
}

// assigns random value to player and dealers starting cards
document.getElementById("playersCard1").innerHTML = getRandomCardVal();
document.getElementById("playersCard2").innerHTML = getRandomCardVal();
document.getElementById("dealersCard1").innerHTML = getRandomCardVal();

// initializes score of player and dealer
updatePlayerScores();
updateDealerScores();

// key used to create id for new player cards
let playerCardId = 3

// function for event handler for the hit button
function handleClickHit(event) {
    // create new card html element
    let newCard = document.createElement("section");
    let id = "playersCard" + playerCardId;
    playerCardId += 1;
    newCard.setAttribute("id", id);
    newCard.setAttribute("class", "playerCard");
    // assign card val
    newCard.innerHTML = getRandomCardVal();
    document.getElementById("players_hand").appendChild(newCard);
    updatePlayerScores();
    // check if player busted
    if (playerHardScore > 21) {
        document.getElementById("outcome").innerHTML = "BUST";
        endGame();
    }
    if (playerHardScore == 21 || playerSoftScore == 21) {
        document.getElementById("outcome").innerHTML = "BLACK JACK";
        endGame();
    }
}

// add event listener on hit button
hit.addEventListener("click", handleClickHit);

//function for event handler for the stay button

// add event listener on the stay button

//function for event handler for the play again button

// function that puts game into end of game stage
function endGame() {
    document.getElementById("play_again").style.display = "inline-block";
    document.getElementById("outcome").style.display = "block";
    hit.removeEventListener("click", handleClickHit);
}