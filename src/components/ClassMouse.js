// lecture 9 run effects only once

import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition)
  }
//   we set up the event listener only once

  render() {
    return (
      <div>
        x - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
