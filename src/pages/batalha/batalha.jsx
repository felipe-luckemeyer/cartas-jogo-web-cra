import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styled-batalha";

const Batalha = () => {
  return (
    <s.Container className="fade-in">
      <h1>Já quer morrer? Ainda é muito cedo para isso novato.</h1>
      <Link to="/">Dar meia volta</Link>
    </s.Container>
  );
};

export default Batalha;
