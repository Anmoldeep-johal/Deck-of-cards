
import React from "react";

export default function Buttons({ onDealFive, onDealSeven, onReset, onToss }) {
  return (
    <div className="controls">
      <button onClick={onDealFive}>Deal 5</button>
      <button onClick={onDealSeven}>Deal 7</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onToss}>Toss</button>
    </div>
  );
}
