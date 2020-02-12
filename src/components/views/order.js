import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputOrder from "../views/inputOrder";
import BackImg from "../../media/BGimg.jpg";

import { display } from "@material-ui/system";

const useStyles = theme => ({
  container: {
    height: 400,
    //    backgroundImage: "url(" + BackImg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    opacity: "1",
    display: "flex",
    margin: "8px"
  }
});

class Order extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          alignContent={"center"}
          justify={"center"}
        >
          <Grid item sm={6} xs={12}>
            <InputOrder />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Order);
