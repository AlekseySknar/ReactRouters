import React, { Component } from "react";
import DeviceInfoInput from "../../views/order/deviceInfo";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";
import { changeOrderStep } from "../../../redux/actions/actionOrder";

class DeviceInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  render() {
    return (
      <DeviceInfoInput
        handleClickClear={this.handleClickClear}
        manufacturer={this.props.manufacturer}
        handleClickNext={this.handleClickNext}
      />
    );
  }

  handleClickNext() {
    store.dispatch(changeOrderStep(1));
  }

  handleClickClear() {
    store.dispatch(changeManufacturer(""));
    store.dispatch(changeOrderStep(0));
  }
}

const mapStateToProps = function(store) {
  return {
    manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(DeviceInfoContainer);
