import React from "react";

export default function Deck({ deckEmpty, onDraw }) {
  return (
    <div
      className={`deck ${deckEmpty ? "deck-empty" : ""}`}
      onClick={!deckEmpty ? onDraw : undefined}
    >
      {deckEmpty ? "No cards remaining" : "Click deck to draw a card"}
    </div>
  );
}
