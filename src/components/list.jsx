import React from "react";

export default function List({ cards = [], onSelect, selectedIndex }) {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === selectedIndex ? "selected" : ""}`}
          onClick={() => onSelect && onSelect(index)}
        >
          <img
            src={new URL(`../assets/cards/${card.image}`, import.meta.url).href}
            alt={`${card.newUnit} ${card.newSuit}`}
            style={{ width: "80px", height: "120px", borderRadius: "6px" }}
          />
        </div>
      ))}
    </div>
  );
}
