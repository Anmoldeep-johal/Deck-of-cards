
import React from "react";

// This component shows the visible cards. It expects each card object
// to have properties: newUnit, newSuit, image (filename).
export default function List({ cards = [] }) {
  return (
    <div className="cards">
      {cards.map((card, idx) => (
        <div className="card" key={idx}>
          {/* Show image if exists in assets */}
          <img
            src={`/src/assets/cards/${card.image}`}
            alt={`${card.newUnit} ${card.newSuit}`}
            width="80"
            height="120"
            onError={(e) => {
              // If image missing, show plain text fallback
              e.target.style.display = "none";
            }}
          />
          {/* fallback text (visible if image not found) */}
          <div className="card-text">
            {card.newUnit} {card.newSuit}
          </div>
        </div>
      ))}
    </div>
  );
}
