// StAuth10244: I Anmoldeep Kaur, 000911480 certify that this material is my original work.
// No other person's work has been used without due acknowledgement.
// I have not made my work available to anyone else.

import React from "react";
//declare deck components 
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
