import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
//TODO:
//Разобраться с компонентом IndexRoute

// Layouts
import MainLayout from "../components/layouts/main";

// Pages
import Main from "../components/views/home/home";
import DetalsMain from "../components/views/order/detalsMain";

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Main} />
      <Route path="order" component={DetalsMain} />
    </Route>
  </Router>
);
