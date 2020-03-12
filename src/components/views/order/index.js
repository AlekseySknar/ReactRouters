import React from "react";
import store from "../../../store";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Steps from "./steps";
import Container from "@material-ui/core/Container";
import DeviceButtonsContainer from "../../containers/order/deviceButtonsContainer";
import ManufacturesContainer from "../../containers/order/manufacturersContainer";
import DeviceInfoContainer from "../../containers/order/deviceInfoContainer";
import ProblemDescription from "./problemDescription";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Order extends React.Component {
  getContent() {
    switch (this.props.step) {
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
      case 1:
        return <ProblemDescription />;
      default:
        return null;
    }
  }

  gerButtons() {
    switch (this.props.step) {
      case 0:
        return (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Button>Далее</Button>
              </Grid>
            </Grid>
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
            {this.getContent()}
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Order;
