import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <NavLink to="/home">Home</NavLink>
          <span> | </span>
          <NavLink to="/cameras">Cameras</NavLink>
          <span> | </span>
          <NavLink to="/lenses">Lenses</NavLink>
          <span> | </span>
          <NavLink to="/accessories">Accessories</NavLink>
          <span> | </span>
          <NavLink to="/about">About</NavLink>
          <span> | </span>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {this.props.children}
      </div>
    );
  }
}
