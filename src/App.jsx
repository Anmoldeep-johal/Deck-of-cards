// StAuth10244: I Anmoldeep Kaur, 000911480 certify that this material is my original work.
// No other person's work has been used without due acknowledgement.
// I have not made my work available to anyone else.

import React, { useState, useEffect } from "react";
import Deck from "./components/deck.jsx";
import Buttons from "./components/buttons.jsx";
import List from "./components/list.jsx";
import "./App.css";

function App() {
  // suits and values for deck
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

  // create full 52-card deck
  function createDeck() {
    const newDeckVal = []; // array to store 52 cards
    for (let suit of suits) {
      for (let unit of units) {
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

        const imageFile = `${valueName}_of_${suitName}.png`;// build image filename

      
        newDeckVal.push({
          newSuit: suit,
          newUnit: unit,
          image: imageFile,
        });
      }
    }
    return newDeckVal;// return the 52 cards after storing them in a array.
  }

  // state variables
  const [cardsLeft, setCardsLeft] = useState(createDeck());// intialise the cards 
  const [cardsVisible, setCardsVisible] = useState([]);//cards currently visible on screen 
  const [currentSelectedCard, setSelectedCard] = useState(null);// card selected
  const [text, setText] = useState("Welcome to the game of cards");//text at top

  // update text when deck changes
  useEffect(() => {
    if (cardsLeft.length === 0) setText("No card is left in the deck");
    else setText(`Cards left in the deck: ${cardsLeft.length}`);
  }, [cardsLeft]);

  // draw one card
  function drawCard() {
    if (cardsLeft.length === 0) {
      alert("Deck is empty!");
      return;
    }
    const newCard = cardsLeft[cardsLeft.length - 1];// pull out last card
    const newDeck = cardsLeft.slice(0, -1);// remove card and store the deck 

    setCardsLeft(newDeck);
    setCardsVisible([...cardsVisible, newCard]);// store in new array
  }

  // deal 5 random cards
  function dealFiveCards() {
    const newDeck = createDeck();
    const dealt = [];
    for (let i = 0; i < 5; i++) {
      const rand = Math.floor(Math.random() * newDeck.length);
      dealt.push(newDeck[rand]);
      newDeck.splice(rand, 1);
    }
    setCardsLeft(newDeck);
    setCardsVisible(dealt);
    setSelectedCard(null);
  }

  // deal 7 random cards
  function dealSevenCards() {
    const newDeck = createDeck();
    const dealt = [];
    for (let i = 0; i < 7; i++) {
      const rand = Math.floor(Math.random() * newDeck.length);
      dealt.push(newDeck[rand]);
      newDeck.splice(rand, 1);
    }
    setCardsLeft(newDeck);
    setCardsVisible(dealt);
    setSelectedCard(null);
  }

  // reset everything
  function resetGame() {
    setCardsLeft(createDeck());
    setCardsVisible([]);
    setSelectedCard(null);
    setText("Deck reset. Let's play again!");
  }
  function tossCard() {
    if (currentSelectedCard === null) {
      alert("Select a card to toss!");
      return;
    }

    const updated = [...cardsVisible];
    updated.splice(currentSelectedCard, 1); // remove selected card
    setCardsVisible(updated);
    setSelectedCard(null);
  }

  function regroupCards() {
    const shuffled = [...cardsVisible].sort(() => Math.random() - 0.5);
    setCardsVisible(shuffled);
    setSelectedCard(null);
  }
  // Wildcard (add random new card)
  function addWildcard() {
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

    // pick random suit and value
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomUnit = units[Math.floor(Math.random() * units.length)];

    const suitName =
      randomSuit === "♥"
        ? "hearts"
        : randomSuit === "♦"
        ? "diamonds"
        : randomSuit === "♣"
        ? "clubs"
        : "spades";

    const valueName =
      randomUnit === "A"
        ? "ace"
        : randomUnit === "J"
        ? "jack"
        : randomUnit === "Q"
        ? "queen"
        : randomUnit === "K"
        ? "king"
        : randomUnit;

    const imageFile = `${valueName}_of_${suitName}.png`;

    const newCard = {
      newSuit: randomSuit,
      newUnit: randomUnit,
      image: imageFile,
    };

    setCardsVisible([...cardsVisible, newCard]);
  }

  function handleCardClick(index) {
    // If no card is currently selected  select this one
    if (currentSelectedCard === null) {
      setSelectedCard(index);
    }
    // If the same card is clicked again  unselect
    else if (currentSelectedCard === index) {
      setSelectedCard(null);
    }
    // If another card is clicked while one is selected  swap
    else {
      const updated = [...cardsVisible];
      [updated[currentSelectedCard], updated[index]] = [
        updated[index],
        updated[currentSelectedCard],
      ];
      setCardsVisible(updated);
      setSelectedCard(null);
    }
  }

  return (
    <div className="app">
      <h1>{text}</h1>

      {/* Deck box */}
      <Deck deckEmpty={cardsLeft.length === 0} onDraw={drawCard} />

      {/* Buttons */}
      <Buttons
        onDealFive={dealFiveCards}
        onDealSeven={dealSevenCards}
        onReset={resetGame}
        onToss={tossCard}
        onRegroup={regroupCards}
        onWildcard={addWildcard}
      />
      <List
        cards={cardsVisible}
        selectedIndex={currentSelectedCard}
        onSelect={handleCardClick}
      />
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Anmoldeep Kaur — React Card Deck Game |
        </p>
      </footer>
    </div>
  );
}

export default App;
