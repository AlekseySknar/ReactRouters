import React, { Component } from "react";
import DeviceInfoInput from "../../views/order/deviceInfo";
import Order from "../../views/order";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";
import { changeOrderStep } from "../../../redux/actions/actionOrder";
import { nextOrderStep } from "../../../redux/actions/actionOrder";

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickNextStep = this.handleClickNextStep.bind(this);
  }

  handleClickNextStep() {
    console.log("lol");
    store.dispatch(nextOrderStep());
  }

  render() {
    return (
      <Order
        manufacturer={this.props.manufacturer}
        step={this.props.step}
        handleClickNext={this.handleClickNextStep}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    step: store.orderState.step,
    manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(OrderContainer);
