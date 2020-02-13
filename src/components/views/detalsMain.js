import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HowWork from "./howWork";
import Detals from "./detals";

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

class DetalsMain extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          spacing={2}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          justify={"center"}
        >
          <Grid item sm={10} xs={12} md={8}>
            <Detals />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(DetalsMain);
