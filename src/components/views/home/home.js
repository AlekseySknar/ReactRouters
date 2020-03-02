import React from "react";
import InputOrder from "./inputOrder";
import Work from "./work";
import Grid from "@material-ui/core/Grid";

export default class Main extends React.Component {
  render() {
    return (
      <Grid
        container
        alignItems={"center"}
        alignContent={"center"}
        justify={"center"}
      >
        <InputOrder />
        <Work />
      </Grid>
    );
  }
}
