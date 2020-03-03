import React from "react";
import Grid from "@material-ui/core/Grid";
import { PhonesList } from "../../resurses/array";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function doList(props) {
  const itemsFilter = PhonesList.filter(
    value => value.indexOf(props.manufacturer.toUpperCase()) === 0
  );

  var items = [];
  itemsFilter.map(value => {
    items.push(
      <Grid item key={value} sm={4} md={3} xs={6}>
        <Button
          fullWidth
          variant={props.selectedManufacture === value ? "contained" : "text"}
          color={props.selectedManufacture === value ? "primary" : "default"}
          onClick={() => props.handleClick(value.id)}
        >
          {value}
        </Button>
      </Grid>
    );
  });
  return items;
}

class ManufacturerList extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h3" style={{ textAlign: "left" }}>
          Выберете марку:
        </Typography>
        <TextField
          id="outlined-basic"
          label="Марка"
          variant="outlined"
          value={this.props.manufacturer}
          onChange={this.props.handleChangeManufacturer}
          fullWidth
        />
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          alignContent={"center"}
          justify={"center"}
        >
          {doList(this.props)}
        </Grid>
      </div>
    );
  }
}

export default ManufacturerList;
