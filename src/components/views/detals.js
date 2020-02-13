import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CustomizedSteppers from "./steps";
import TextField from "@material-ui/core/TextField";

class Detals extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h3" style={{ textAlign: "left" }}>
          Заявка.
        </Typography>
        <CustomizedSteppers />
        <Typography variant="h3" style={{ textAlign: "left" }}>
          Тип устройства:
        </Typography>
        <Button variant="outlined">Смартфон</Button>
        <Button variant="contained" color="primary">
          Ноутбук
        </Button>
        <Button variant="outlined">Планшет</Button>
        <Typography variant="h3" style={{ textAlign: "left" }}>
          Выберете марку:
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </div>
    );
  }
}

export default Detals;