import React, { Component } from "react";
import DeviceInfoInput from "../../views/order/deviceInfo";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";

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
    store.dispatch(changeManufacturer(""));
  }
}

const mapStateToProps = function(store) {
  return {
    manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(DeviceInfoContainer);
