import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Steps from "./steps";
import DeviceButtonsContainer from "../../containers/order/deviceButtonsContainer";
import ManufacturesContainer from "../../containers/order/manufacturersContainer";
import Container from "@material-ui/core/Container";
import DeviceInfoContainer from "../../containers/order/deviceInfoContainer";

class Detals extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Container maxWidth="md">
          <Paper>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Заявка.
            </Typography>
            <Steps />
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Тип устройства:
            </Typography>
            <DeviceButtonsContainer />
            {this.props.manufacturer === "" ? (
              <ManufacturesContainer />
            ) : (
              <DeviceInfoContainer />
            )}
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Detals;
