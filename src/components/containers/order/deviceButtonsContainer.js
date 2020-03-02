import React, { Component } from "react";
import DeviceButtons from "../../views/order/deviceButtons";
import store from "../../../store";
import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";

class DeviceButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonID) {
    store.dispatch(changeDeviceType(buttonID));
  }

  render() {
    return (
      <DeviceButtons
        handleClick={this.handleClick}
        activeButton={this.props.activeButton}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    activeButton: store.orderState.deviceType
  };
};

export default connect(mapStateToProps)(DeviceButtonsContainer);
