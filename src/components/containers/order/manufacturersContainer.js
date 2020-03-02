import React, { Component } from "react";
import ManufacturerList from "../../views/order/manufacturerList";
import store from "../../../store";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";

class ManufacturesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
  }

  handleChangeManufacturer(event) {
    console.log(event);
    store.dispatch(changeManufacturer(event.target.value));
  }

  render() {
    return (
      <ManufacturerList
        manufacturer={this.props.manufacturer}
        handleChangeManufacturer={this.handleChangeManufacturer}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    manufacturer: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(ManufacturesContainer);
