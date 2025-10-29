
import React from "react";

export default function Buttons({ onDealFive, onDealSeven }) {
  return (
    <div className="controls">
      <button onClick={onDealFive}>Deal 5</button>
      <button onClick={onDealSeven}>Deal 7</button>
    </div>
  );
}
