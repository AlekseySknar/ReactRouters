import React from "react";
//import { Router, Route, browserHistory, IndexRoute } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//TODO:
//Разобраться с компонентом IndexRoute

// Layouts
import MainLayout from "../components/layouts/main";

// Pages
import Main from "../components/views/home/home";
import DetalsContainer from "../components/containers/order/detalsContainer";

export default (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/order" component={DetalsContainer} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);
