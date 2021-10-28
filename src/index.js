import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Web from "./Web";
import Mobile from "./Mobile";
import School from "./School";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="//web-development-job-request" component={Web} />
      <Route path="/mobile-app-job-request" component={Mobile} />
      <Route path="/zentrum-school" component={School} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
