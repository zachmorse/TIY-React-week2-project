import React, { Component } from "react";
import accessoryData from "../data/accessoryData";

let styles = {
  imageSize: {
    maxHeight: 250,
    maxWidth: "auto",
    float: "left",
    padding: "0rem 2rem"
  },
  container: {
    height: 300,
    padding: "1rem 2rem 1rem 0rem"
  }
};

export default class Accessories extends Component {
  render() {
    let accessories = accessoryData.map(accessories => {
      return (
        <div key={accessories.id} style={styles.container}>
          <img
            src={accessories.picture}
            alt={accessories.model}
            style={styles.imageSize}
          />
          <h1 style={{ margin: 0 }}>
            {accessories.model}
          </h1>
          <p>
            {accessories.price}
          </p>
          <p style={{ fontSize: "0.8em" }}>
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
