import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Time from "../../../media/timepng.png";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
  container: {
    margin: "20px"
  },
  rightPicBlock: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right"
    }
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
          <Grid item sm={6} xs={12} className={classes.rightPicBlock}>
            <Typography variant="h4">Экономьте время</Typography>
            <Typography variant="body1">
              В среднем на поиск сервисного центра уходит 40 минут, благодаря
              нашему сервису вам не придется тратить личное время. Cотни
              сервичных центров сами пришлют вам предложения по ремонту вашей
              техники.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
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
