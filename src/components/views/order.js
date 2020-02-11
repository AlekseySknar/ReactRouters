import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputOrder from "../views/inputOrder";

import { display } from "@material-ui/system";

const useStyles = theme => ({
  container: {
    height: 400,
    backgroundImage:
      "url(https://p1.zoon.ru/preview/492bmrGYwrpF03j_ehy43A/2400x1500x75/1/f/4/original_52c0d06740c0886b7c8ff37d_56084fcfaf079.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    opacity: "1",
    display: "flex"
  }
});

class Order extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          spacing={1}
          alignItems={"center"}
          alignContent={"center"}
          justify={"center"}
        >
          <Grid item sm={6}>
            <InputOrder />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Order);
