import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { connect } from "react-redux";

class Steps extends React.Component {
  render() {
    return (
      <Stepper activeStep={this.props.step} alternativeLabel>
        <Step key={1}>
          <StepLabel>Выберете устройство</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>Опишите работы</StepLabel>
        </Step>
        <Step key={3}>
          <StepLabel>Задайте параметры</StepLabel>
        </Step>
      </Stepper>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    step: store.orderState.step
  };
};

export default connect(mapStateToProps)(Steps);
