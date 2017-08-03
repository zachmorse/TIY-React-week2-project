import React, { Component } from "react";
import lenseData from "../data/lenseData";

export default class Lenses extends Component {
  render() {
    let lenses = lenseData.map(lenses => {
      return (
        <div key={lenses.id}>
          <img src={lenses.picture} alt={lenses.model} />
          <h3>
            {lenses.model}
          </h3>
          <p>
            {lenses.price}
          </p>
          <p>
            {lenses.description}
          </p>
        </div>
      );
    });

    return (
      <div>
        {lenses}
      </div>
    );
  }
}
