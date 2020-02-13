import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CustomizedSteppers from "./steps";

class Detals extends React.Component {
  render() {
    return (
      <div>
        <CustomizedSteppers />
      </div>
    );
  }
}

export default Detals;
