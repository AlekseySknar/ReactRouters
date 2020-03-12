import React from "react";
import store from "../../../store";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Steps from "./steps";
import Container from "@material-ui/core/Container";
import DeviceButtonsContainer from "../../containers/order/deviceButtonsContainer";
import ManufacturesContainer from "../../containers/order/manufacturersContainer";
import DeviceInfoContainer from "../../containers/order/deviceInfoContainer";

class Order extends React.Component {
  getContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <DeviceButtonsContainer />
            {this.props.manufacturer === "" ? (
              <ManufacturesContainer />
            ) : (
              <DeviceInfoContainer />
            )}
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Container maxWidth="md">
          <Paper>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Заявка.
            </Typography>
            <Steps />
          </Paper>
          {this.getContent(this.props.step)}
        </Container>
      </div>
    );
  }
}

export default Order;
