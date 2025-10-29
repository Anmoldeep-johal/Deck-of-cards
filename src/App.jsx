

import React, { useState, useEffect } from "react";
import Deck from "./components/deck.jsx";
import Buttons from "./components/buttons.jsx";
import List from "./components/list.jsx";
import "./App.css";

function App() {
  //creates values for deck and wildcards
  const suits = ["♥", "♦", "♣", "♠"];
  const units = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  //create a deck of 52 cards
  function createDeck() {
    const newDeckVal = [];
    for (let suit of suits) {
      for (let unit of units) {
        // keep your original property names newSuit and newUnit
        // also build image name (simple pattern: value_of_suit.png)
        const suitName =
          suit === "♥"
            ? "hearts"
            : suit === "♦"
            ? "diamonds"
            : suit === "♣"
            ? "clubs"
            : "spades";

        const valueName =
          unit === "A"
            ? "ace"
            : unit === "J"
            ? "jack"
            : unit === "Q"
            ? "queen"
            : unit === "K"
            ? "king"
            : unit;

        const imageFile = `${valueName}_of_${suitName}.png`;

        newDeckVal.push({
          newSuit: suit,
          newUnit: unit,
          image: imageFile,
        });
      }
    }
    return newDeckVal;
  }

  //set the state variables (kept the same names)
  const [cardsLeft, setCardsLeft] = useState(createDeck()); // cards still in the deck
  const [cardsVisible, setCardsVisible] = useState([]); // cards present on the screen currently
  const [currentSelectedCard, setSelectedCard] = useState(null); // which card is selected

  const [text, setText] = useState("Welcome to the game of cards");

  //update message when deck is changed
  useEffect(() => {
    if (cardsLeft.length === 0) {
      setText("No card is left in the deck");
    } else {
      setText("Cards left in the deck: " + cardsLeft.length);
    }
  }, [cardsLeft]);

  // draw top card (simple)
  function drawCard() {
    if (cardsLeft.length === 0) {
      alert("Deck is empty!");
      return;
    }
    const newCard = cardsLeft[cardsLeft.length - 1]; // take out the top card
    const newDeck = cardsLeft.slice(0, -1); // make a copy of deck without the card we just took out

    setCardsLeft(newDeck); // update the deck
    setCardsVisible([...cardsVisible, newCard]); // add to visible cards
  }

  // DEAL 5 CARDS (keeps your variable names)
  function dealFiveCards() {
    const newDeck = createDeck(); // start with full 52 cards deck
    const cardsDealt = []; // creates an empty array for cards we will pull out from deck
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length); // choose a random index of card
      const randomCardChosen = newDeck[randomIndex]; // take that random card out
      newDeck.splice(randomIndex, 1); // remove that card from deck
      cardsDealt.push(randomCardChosen); // add it to player screen
    }
    setCardsLeft(newDeck);
    setCardsVisible(cardsDealt); // show the 5 dealt cards
    setSelectedCard(null);
  }

  function dealSevenCards() {
    const newDeck = createDeck();
    const cardsDealt = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length); //choose a random index of card.
      const randomCardChosen = newDeck[randomIndex]; //take that random card out
      newDeck.splice(randomIndex, 1); //take that card out of deck.
      cardsDealt.push(randomCardChosen); //add it to player screen.
    }

    setCardsLeft(newDeck);
    setCardsVisible(cardsDealt);
    setSelectedCard(null);
  }

  // RESET — returns all cards to the deck
  function resetGame() {
    setCardsLeft(createDeck()); // recreate full deck of 52 cards
    setCardsVisible([]); // clear visible cards
    setSelectedCard(null); // unselect any card
    setText("Deck reset. Let's play again!"); // update message
  }

  return (
    <div className="app">
      <h1>{text}</h1>

      {/* Deck component: click to draw one */}
      <Deck deckEmpty={cardsLeft.length === 0} onDraw={drawCard} />

      <Buttons
        onDealFive={dealFiveCards}
        onDealSeven={dealSevenCards}
        onReset={resetGame}
      />

      {/* Card list: shows images for cardsVisible */}
      <List cards={cardsVisible} />
    </div>
  );
}

export default App;
