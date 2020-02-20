import * as React from "react";
import { render } from "react-dom";

import App from "./App";

//React-route
import router from "./router/router";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
