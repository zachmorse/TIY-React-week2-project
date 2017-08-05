import React, { Component } from "react";

let styles = {
  imageSize: {
    maxHeight: 250,
    maxWidth: "auto",
    float: "left",
    padding: "0rem 2rem"
  },
  container: {
    height: 500,
    padding: "1rem 2rem 1rem 0rem",
    margin: "1rem"
  }
};

export default class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Who we are</h1>

        <p>
          Pikturist is a boutique online camera retailer, serving a hand-curated
          selection of the finest and most unique products available to the
          discerning photographer. We only sell the things we use and believe
          in... the tools to capture your vision of the world.
        </p>
      </div>
    );
  }
}
