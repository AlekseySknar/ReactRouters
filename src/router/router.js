import React from "react";
//import { Router, Route, browserHistory, IndexRoute } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//TODO:
//Разобраться с компонентом IndexRoute

// Layouts
import MainLayout from "../components/layouts/main";

// Pages
import Main from "../components/views/home/home";
import Detals from "../components/views/order/detals";

export default (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/order" component={Detals} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);
