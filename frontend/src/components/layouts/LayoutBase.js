import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import Header from "./Header";

export default function LayoutBase(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Header />
          <Route exact={true} path='/' component={App} />
          <div className="container mx-auto">{props.children}</div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
