import React, { Component } from "react";
import cameraData from "../data/cameraData";

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

export default class Cameras extends Component {
  render() {
    let cameras = cameraData.map(cameras => {
      return (
        <div key={cameras.id}>
          <div style={styles.container}>
            <div>
              <img
                src={cameras.picture}
                alt={cameras.model}
                style={styles.imageSize}
              />
            </div>

            <div>
              <h1 style={{ margin: 0 }}>
                {cameras.model}
              </h1>
            </div>

            <p style={{ fontSize: "0.8em" }}>
              {cameras.description}
            </p>
            <p>
              {cameras.price}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {cameras}
      </div>
    );
  }
}
