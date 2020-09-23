import React from "react";
import { Icons } from "../../assets";
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
      <s.Content>
        <section>
          <s.Tab top={30} selected>
            <img src={Icons.profile} alt="" />
          </s.Tab>
          <s.Tab top={30}>
            <img src={Icons.profile} alt="" />
          </s.Tab>
          <s.Tab top={5} disabled>
            <img src={Icons.profile} alt="" />
          </s.Tab>
          <s.Tab top={5} disabled>
            <img src={Icons.profile} alt="" />
          </s.Tab>
        </section>
        <section>
          {cartas.map((carta, i) => (
            <Card carta={carta} key={i} />
          ))}
        </section>
      </s.Content>
      <s.MyLink to="/">Voltar</s.MyLink>
    </s.Container>
  );
};

export default Colecao;
