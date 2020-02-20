import * as React from "react";
import "./styles.css";
import ButtonAppBar from "./components/header";
import Order from "./components/views/order";
import Work from "./components/views/work";
import CssBaseline from "@material-ui/core/CssBaseline";
import DetalsMain from "./components/views/order/detalsMain";
import router from "./router/router";

export default function App() {
  return <div> {router} </div>;
}
