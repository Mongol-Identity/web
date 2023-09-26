import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../assets/styles/common.scss";
import "../assets/styles/bootstrap/css/bootstrap.min.css";

import MainRoute from "./layout/MainRoute";

function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
