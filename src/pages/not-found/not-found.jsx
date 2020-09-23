import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styled-not-found";
const NotFound = () => {
  return (
    <s.Container className="fade-in">
      <h1>Alto lá, acho que você está perdido meu caro.</h1>
      <Link to="/">Dar meia volta</Link>
    </s.Container>
  );
};

export default NotFound;
