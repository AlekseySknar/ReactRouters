import React, { Component } from "react";
import Detals from "../../views/order/detals";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";

class DetalsContainer extends React.Component {
  render() {
    return <Detals manufacturer={this.props.manufacturer} />;
  }
}

const mapStateToProps = function(store) {
  return {
    manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(DetalsContainer);
