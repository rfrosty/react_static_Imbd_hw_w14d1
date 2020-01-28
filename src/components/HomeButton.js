import React, { Component } from "react";

class HomeButton extends Component {
  render() {
    return (
      <a href={this.props.data}>View more upcoming releases</a>
    )
  }
}

export default HomeButton;
