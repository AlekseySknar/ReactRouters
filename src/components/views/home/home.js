import React from "react";
import Detals from "./inputOrder";
import Work from "./work";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Detals />
        <Work />
      </div>
    );
  }
}
