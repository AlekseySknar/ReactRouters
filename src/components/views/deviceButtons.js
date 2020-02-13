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
          variant="outlined"
          startIcon={<SmartphoneIcon />}
          className={classes.button}
        >
          Смартфон
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LaptopIcon />}
          className={classes.button}
        >
          Ноутбук
        </Button>
        <Button
          variant="outlined"
          startIcon={<TabletMacIcon />}
          className={classes.button}
        >
          Планшет
        </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(DeviceButtins);
