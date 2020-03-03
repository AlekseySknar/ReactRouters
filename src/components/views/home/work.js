import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HowWork from "./howWeWorkSection.js";

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

class Work extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container spacing={2} justify={"center"}>
          <Grid item sm={10} xs={12} md={8}>
            <HowWork />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Work);
