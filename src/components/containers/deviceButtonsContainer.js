import React, { Component } from "react";
import DeviceButtons from "../views/deviceButtons";

class DeviceButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonID) {
    console.log("click! " + buttonID);
    this.setState({ activeButton: buttonID });
  }

  render() {
    return (
      <DeviceButtons
        handleClick={this.handleClick}
        activeButton={this.state.activeButton}
      />
    );
  }
}

export default DeviceButtonsContainer;
