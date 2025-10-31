// StAuth10244: I Anmoldeep Kaur, 000911480 certify that this material is my original work.
// No other person's work has been used without due acknowledgement.
// I have not made my work available to anyone else.

import React from "react";

export default function List({ cards = [], selectedIndex, onSelect }) {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === selectedIndex ? "selected" : ""}`}
          onClick={() => onSelect(index)} // tells App which card was clicked
        >
          <img
            src={new URL(`../assets/cards/${card.image}`, import.meta.url).href}
            alt={`${card.newUnit} ${card.newSuit}`}
          />
        </div>
      ))}
    </div>
  );
}
