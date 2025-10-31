// StAuth10244: I Anmoldeep Kaur, 000911480 certify that this material is my original work.
// No other person's work has been used without due acknowledgement.
// I have not made my work available to anyone else.
import React from "react";

export default function Buttons({
  onDealFive,
  onDealSeven,
  onReset,
  onToss,
  onRegroup,
  onWildcard,
}) {
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
