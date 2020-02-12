import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Time from "../../media/timepng.png";
import Typography from "@material-ui/core/Typography";

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
      <div>
        <Grid
          container
          spacing={1}
          alignItems={"center"}
          alignContent={"center"}
          justify={"center"}
        >
          <Grid item sm={6}>
            <h4>Second</h4>
          </Grid>
          <Grid item sm={6}>
            <img
              src={Time}
              style={{
                height: "190px",
                width: "190px"
              }}
              alt={"some"}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(HowWork);
