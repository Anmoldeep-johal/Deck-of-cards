
import React from "react";

export default function Buttons({ onDealFive, onDealSeven, onReset, onToss,onRegroup }) {
  return (
    <div className="controls">
      <button onClick={onDealFive}>Deal 5</button>
      <button onClick={onDealSeven}>Deal 7</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onToss}>Toss</button>
      <button onClick={onRegroup}>Shuffle</button>
    </div>
  );
}
