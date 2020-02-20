import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import LaptopIcon from "@material-ui/icons/Laptop";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import TabletMacIcon from "@material-ui/icons/TabletMac";

const useStyles = theme => ({
  buttonContainer: {
    textAlign: "left"
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});

class DeviceButtins extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.buttonContainer}>
        <Button
          variant={this.props.activeButton === 0 ? "contained" : "outlined"}
          color={this.props.activeButton === 0 ? "primary" : "default"}
          startIcon={<SmartphoneIcon />}
          className={classes.button}
          onClick={() => this.props.handleClick(0)}
        >
          Смартфон
        </Button>
        <Button
          variant={this.props.activeButton === 1 ? "contained" : "outlined"}
          color={this.props.activeButton === 1 ? "primary" : "default"}
          startIcon={<LaptopIcon />}
          className={classes.button}
          onClick={() => this.props.handleClick(1)}
        >
          Ноутбук
        </Button>
        <Button
          variant={this.props.activeButton === 2 ? "contained" : "outlined"}
          startIcon={<TabletMacIcon />}
          color={this.props.activeButton === 2 ? "primary" : "default"}
          className={classes.button}
          onClick={() => this.props.handleClick(2)}
        >
          Планшет
        </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(DeviceButtins);
