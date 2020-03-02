import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CustomizedSteppers from "./steps";
import DeviceButtonsContainer from "../../containers/order/deviceButtonsContainer";
import ManufacturesContainer from "../../containers/order/manufacturersContainer";

class Detals extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Paper>
          <Typography variant="h3" style={{ textAlign: "left" }}>
            Заявка.
          </Typography>
          {/*<CustomizedSteppers /> */}
          <Typography variant="h3" style={{ textAlign: "left" }}>
            Тип устройства:
          </Typography>
          <DeviceButtonsContainer />
          <ManufacturesContainer />
        </Paper>
      </div>
    );
  }
}

export default Detals;
