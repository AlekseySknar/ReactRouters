import React, { Component } from "react";
import DeviceInfoInput from "../../views/order/deviceInfo";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";

class DeviceInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  render() {
    return (
      <DeviceInfoInput
        handleClickClear={this.handleClickClear}
        manufacturer={this.props.manufacturer}
      />
    );
  }

  handleClickClear() {
    console.log("Clear!");
  }
}

const mapStateToProps = function(store) {
  return {
    Manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(DeviceInfoContainer);
