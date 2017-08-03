import React, { Component } from "react";
import accessoryData from "../data/accessoryData";

export default class Accessories extends Component {
  render() {
    let accessories = accessoryData.map(accessories => {
      return (
        <div key={accessories.id}>
          <img src={accessories.picture} alt={accessories.model} />
          <h3>
            {accessories.model}
          </h3>
          <p>
            {accessories.price}
          </p>
          <p>
            {accessories.description}
          </p>
        </div>
      );
    });

    return (
      <div>
        {accessories}
      </div>
    );
  }
}
