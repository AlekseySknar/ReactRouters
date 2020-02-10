import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  container: {
    height: 400,
    backgroundImage:
      "url(https://p1.zoon.ru/preview/492bmrGYwrpF03j_ehy43A/2400x1500x75/1/f/4/original_52c0d06740c0886b7c8ff37d_56084fcfaf079.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    opacity: "0.5"
  }
});

class Order extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div />
      </div>
    );
  }
}

export default withStyles(useStyles)(Order);
