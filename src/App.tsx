import * as React from "react";
import "./styles.css";
import ButtonAppBar from "./components/header";
import Order from "./components/views/order";
import HowWork from "./components/views/howWork";

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Order />
      <HowWork />
    </div>
  );
}
