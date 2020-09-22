import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import * as s from "./styled-colecao";

const Colecao = () => {
  const cartas = [
    {
      nome: "Dragão Dourado",
      mana: 5,
      classe: "fogo",
      vida: 7,
      ataque: 5,
      image: null,
    },
  ];
  return (
    <s.Container className="fade-in">
      <h1>Bem vindo a sua coleção!</h1>
      {cartas.map((carta, i) => (
        <Card carta={carta} key={i} />
      ))}
      <Link to="/">Retornar</Link>
    </s.Container>
  );
};

export default Colecao;
