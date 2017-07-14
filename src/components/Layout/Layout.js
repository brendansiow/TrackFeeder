import React from "react";
import { Link } from "react-router";
import Nav from "./Nav";
import Home from "./../Pages/Home"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children} {/* this is to render all the components*/}
      </div>
    );
  }
}