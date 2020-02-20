import React from "react";
import Detals from "./order";
import Work from "./work";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Order />
        <Work />
      </div>
    );
  }
}
