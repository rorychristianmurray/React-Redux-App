// Dependencies
import React from "react";
import { connect } from "react-redux";

// Objects

// Styles

const Coin = props => {
  console.log("Coin props", props);
  return (
    <div>
      <div>Coin Name: {props.coin.name}</div>
    </div>
  );
};

export default Coin;
