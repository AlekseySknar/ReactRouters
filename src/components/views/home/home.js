import React from "react";
import InputOrder from "./inputOrder";
import Container from "@material-ui/core/Container";
import HowWork from "./howWeWorkSection.js";

export default class Main extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <InputOrder />
        <HowWork />
      </Container>
    );
  }
}
