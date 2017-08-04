import React, { Component } from "react";
import cameraData from "../data/cameraData";

export default class Cameras extends Component {
  render() {
    let cameras = cameraData.map(cameras => {
      return (
        <div key={cameras.id}>
          <img src={cameras.picture} alt={cameras.model} />
          <h3>
            {cameras.model}
          </h3>
          <p>
            {cameras.price}
          </p>
          <p>
            {cameras.description}
          </p>
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
