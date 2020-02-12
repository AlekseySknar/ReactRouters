import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = theme => ({
  input: {
    borderWidth: "100px 7px 7px 4px" /* Толщина границы */
  },
  orderButton: {
    padding: "15px 16px"
  }
});

class InputOrder extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item sm={10}>
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Заказ"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item sm={2}>
            <Button
              className={classes.orderButton}
              variant="contained"
              color="primary"
              href="#contained-buttons"
              fullWidth
            >
              Поиск
            </Button>
          </Grid>
          <Grid item sm={2}>
            <h2>hello</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(InputOrder);
