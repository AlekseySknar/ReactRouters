import * as React from "react";
import "./styles.css";
import ButtonAppBar from "./components/header";
import Order from "./components/views/order";
import Work from "./components/views/work";

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Order />
      <Work />
    </div>
  );
}
