import React from "react";
import { Link } from "react-router-dom";

let num = 10;
let nums = 20;


const InventorySlider = () => {

    return (
    <div className="player-sheet-container">
      <div className="player-info">
        <Link to="/" className="player-back">
          Back
        </Link>
        <p className="player-info-name">Aadran silverwind</p>
        <p className="player-info-armor">
          AC <li className="armor-class">17</li>
        </p>
        <p className="player-info-init">
          Init <li className="init-bonus">+4</li>
        </p>
        <p className="player-info-health">
          Health{" "}
          <li className="hp-number">
            {num}/{nums}
          </li>
        </p>
      </div>
      </div>
      )
}

export default InventorySlider;