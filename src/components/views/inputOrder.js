import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = theme => ({
  input: {
    borderWidth: "100px 7px 7px 4px" /* Толщина границы */
  },
  orderButton: {
    padding: "15px 16px"
  },
  exmp: {
    textAlign: "left",
    marginTop: "-12px"
  }
});

class InputOrder extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h4">
              Получите предложение от сотни сервисов!
            </Typography>
          </Grid>
          <Grid item sm={10} xs={9}>
            <TextField
              id="outlined-basic"
              label="Заказ"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item sm={2} xs={3}>
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
          <Grid item sm={12}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.exmp}
            >
              Например:{" "}
              <Link href="#">Телевизор монтрровал, а он взорвался</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(InputOrder);
