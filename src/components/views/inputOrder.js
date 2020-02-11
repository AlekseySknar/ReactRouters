import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = theme => ({
  input: {
    borderWidth: "100px 7px 7px 4px" /* Толщина границы */
  }
});

class InputOrder extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
        color="secondary"
      />
    );
  }
}

export default withStyles(useStyles)(InputOrder);
