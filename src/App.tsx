import * as React from "react";
import "./styles.css";
import ButtonAppBar from "./components/header";
import Order from "./components/views/order";
import Work from "./components/views/work";
import CssBaseline from "@material-ui/core/CssBaseline";
import DetalsMain from "./components/views/detalsMain";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ButtonAppBar />
      {/*    
      <Order />
      <Work />*/}
      <DetalsMain />
    </div>
  );
}
