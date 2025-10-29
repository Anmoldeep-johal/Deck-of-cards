
import React from "react";

export default function Deck({ deckEmpty, onDraw }) {
  return (
    <div
      className={`deck ${deckEmpty ? "deck-empty" : ""}`}
      onClick={!deckEmpty ? onDraw : null}
      role="button"
      tabIndex={0}
    >
      {deckEmpty ? "No Cards Remaining" : "Click deck to draw"}
    </div>
  );
}
