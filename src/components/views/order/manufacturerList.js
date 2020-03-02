import React from "react";
import Grid from "@material-ui/core/Grid";
import { PhonesList } from "../../resurses/array";

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
        <Grid container spacing={1}>
          {doList(this.props.manufacturer)}
        </Grid>
      </div>
    );
  }
}

export default ManufacturerList;
