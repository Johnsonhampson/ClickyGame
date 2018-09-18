import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemRight"> Your Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
