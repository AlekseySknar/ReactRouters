import React, { Component } from "react";
import ManufacturerList from "../../views/order/manufacturerList";
import store from "../../../store";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";
import { changeManufacturerFilter } from "../../../redux/actions/actionOrder";

class ManufacturesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { manufacturer: "" };
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleClickManufacturer = this.handleClickManufacturer.bind(this);
  }

  handleChangeManufacturer(event) {
    console.log("ss");
    this.setState({ manufacturer: event.target.value });
    store.dispatch(changeManufacturer(""));
  }

  handleClickManufacturer(manufacturer) {
    store.dispatch(changeManufacturer(manufacturer));
  }
  render() {
    return (
      <ManufacturerList
        manufacturer={this.state.manufacturer}
        selectedManufacture={this.props.selectedManufacture}
        handleChangeManufacturer={this.handleChangeManufacturer}
        handleClick={this.handleClickManufacturer}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    selectedManufacture: store.orderState.manufacturer
  };
};

export default connect(mapStateToProps)(ManufacturesContainer);
