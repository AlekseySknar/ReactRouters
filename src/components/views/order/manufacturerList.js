import React from "react";
import Grid from "@material-ui/core/Grid";
import { PhonesList } from "../../resurses/array";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function doList(manufacturer = "") {
  const itemsFilter = PhonesList.filter(
    value => value.indexOf(manufacturer.toUpperCase()) === 0
  );

  var items = [];
  itemsFilter.map(value => {
    items.push(
      <Grid item key={value} sm={4} md={3} xs={6}>
        <h6>{value}</h6>
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
        <Grid container spacing={1}>
          {doList(this.props.manufacturer)}
        </Grid>
      </div>
    );
  }
}

export default ManufacturerList;
