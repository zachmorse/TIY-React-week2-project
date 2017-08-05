import React, { Component } from "react";
import lenseData from "../data/lenseData";

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

export default class Lenses extends Component {
  render() {
    let lenses = lenseData.map(lenses => {
      return (
        <div key={lenses.id} style={styles.container}>
          <img
            src={lenses.picture}
            alt={lenses.model}
            style={styles.imageSize}
          />
          <h1 style={{ margin: 0 }}>
            {lenses.model}
          </h1>
          <p>
            {lenses.price}
          </p>
          <p style={{ fontSize: "0.8em" }}>
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
