import React from "react";

import AppHeader from "../header";

// Using "Stateless Functional Components"
export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
