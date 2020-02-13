import React from "react";
import Grid from "@material-ui/core/Grid";

function doList() {
  const items = [];
  for (let i = 0; i < 30; i++) {
    items.push(
      <Grid item key={i} sm={4} md={3} xs={6}>
        <h6>Apple</h6>
      </Grid>
    );
  }
  return items;
}

class ManufacturerList extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          {doList()}
        </Grid>
      </div>
    );
  }
}

export default ManufacturerList;
