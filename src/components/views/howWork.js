import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = theme => ({
  container: {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    opacity: "1",
    display: "flex"
  }
});

class HowWork extends React.Component {
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
            <h1>First</h1>
          </Grid>
          <Grid item sm={6}>
            <h1>Second</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(HowWork);
