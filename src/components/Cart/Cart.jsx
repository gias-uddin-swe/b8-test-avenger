/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ selectedActor, remaining, totalCost, handleControl }) => {
  return (
    <div>
      <h1> Total Budget: 20,000 $</h1>

      <h5>remaining:{remaining}</h5>
      <h5>total cost:{totalCost}</h5>
      {selectedActor.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
      <button onClick={() => handleControl(false)} className="done-btn">
        Complete
      </button>
    </div>
  );
};

export default Cart;
