import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
  input: {
    borderWidth: "100px 7px 7px 4px" /* Толщина границы */,
    marginRight: theme.spacing(2)
  }
});

class InputOrder extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          color="secondary"
        />
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          fullWidth
        >
          Link
        </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(InputOrder);
