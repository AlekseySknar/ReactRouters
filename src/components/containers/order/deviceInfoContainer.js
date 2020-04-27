import React from "react";
import DeviceInfoInput from "../../views/order/deviceInfo";
import store from "../../../store";
//import { changeDeviceType } from "../../../redux/actions/actionOrder";
import { connect } from "react-redux";
import { changeManufacturer } from "../../../redux/actions/actionOrder";
import { changeOrderStep } from "../../../redux/actions/actionOrder";
import { changeModel } from "../../../redux/actions/actionOrder";

class DeviceInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { model: "" };
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
  }

  render() {
    return (
      <DeviceInfoInput
        handleClickClear={this.handleClickClear}
        handleChangeModel={this.handleChangeModel}
        model={this.props.model}
        hasError={false}
        manufacturer={this.props.manufacturer}
      />
    );
  }

  handleClickClear() {
    store.dispatch(changeManufacturer(""));
    store.dispatch(changeModel(""));
    store.dispatch(changeOrderStep(0));
  }

  handleChangeModel(event) {
    store.dispatch(changeModel(event.target.value));
  }
}

const mapStateToProps = function(store) {
  return {
    manufacturer: store.orderState.manufacturer,
    model: store.orderState.model
  };
};

export default connect(mapStateToProps)(DeviceInfoContainer);
