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
