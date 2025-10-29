
import React from "react";

export default function Buttons({ onDealFive, onDealSeven, onReset, onToss,onRegroup,onWildcard }) {
  return (
    <div className="controls">
      <button onClick={onDealFive}>Deal 5</button>
      <button onClick={onDealSeven}>Deal 7</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onToss}>Toss</button>
      <button onClick={onRegroup}>Shuffle</button>
      <button onClick={onWildcard}>Wildcard</button>
    </div>
  );
}
