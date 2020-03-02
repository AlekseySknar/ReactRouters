import * as React from "react";
import "./styles.css";
import router from "./router/router";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store}>{router}</Provider>;
}
