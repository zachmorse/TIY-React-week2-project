import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/">Camera Store</NavLink>
        </h1>
      </div>
    );
  }
}
