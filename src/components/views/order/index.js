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

  getPrimatyButton(text) {
    return (
      <Button
        id={this.props.step + "prev"}
        fullWidth
        variant="contained"
        color="primary"
        onClick={this.props.handleClickNext}
      >
        {text}
      </Button>
    );
  }

  getDefaultButton(text) {
    return (
      <Button
        id={this.props.step + "next"}
        fullWidth
        variant="contained"
        color="default"
        onClick={this.props.handleClickPrev}
      >
        {text}
      </Button>
    );
  }

  getButtons() {
    switch (this.props.step) {
      case 0:
        //В списке производителей кнопка не нужна
        if (this.props.manufacturer === "") {
          return null;
        } else {
          return (
            <div>
              <Grid container spacing={2} justify={"flex-end"}>
                <Grid item xs={6} sm={3}>
                  {this.getPrimatyButton("Далее")}
                </Grid>
              </Grid>
            </div>
          );
        }
      case 1:
        return (
          <div>
            <Grid container spacing={2} justify={"flex-end"}>
              <Grid item xs={6} sm={3}>
                {this.getDefaultButton("Назад")}
              </Grid>
              <Grid item xs={6} sm={3}>
                {this.getPrimatyButton("Далее")}
              </Grid>
            </Grid>
          </div>
        );
      case 2:
        return (
          <div>
            <Grid container spacing={2} justify={"flex-end"}>
              <Grid item xs={6} sm={3}>
                {this.getDefaultButton("Назад")}
              </Grid>
              <Grid item xs={6} sm={3}>
                {this.getPrimatyButton("Завершить")}
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
            {this.getButtons()}
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Order;
