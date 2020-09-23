import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes";
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);