import React, { Component } from "react";
import { NavLink } from "react-router-dom";

let style = {
  header: {
    fontFamily: "Monad",
    fontSize: 60,
    backgroundColor: "#1d2120",
    color: "#e9ece5",
    margin: "-2rem 0rem 0rem 0rem",
    padding: "2rem"
  }
};

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1 style={style.header}>Pikturist</h1>
          </NavLink>
        </h1>
      </div>
    );
  }
}
