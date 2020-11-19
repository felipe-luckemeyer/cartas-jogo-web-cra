import React from "react";
import { Icons, Images } from "../../assets";
import { Card } from "../../components";
import * as s from "./styled-colecao";

const Colecao = () => {
  const cartas = [
    {
      possui: true,
      nome: "Smithao muito brabo",
      mana: 5,
      classe: "fogo",
      vida: 7,
      ataque: 5,
      image: Images.smith,
    },
    {
      possui: false,
      nome: "Smithao muito brabo",
      mana: 5,
      classe: "fogo",
      vida: 7,
      ataque: 5,
      image: Images.smith,
    },
  ];
  return (
    <s.Container className="fade-in">
      <s.Content>
        {/* <section>
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
        </section> */}
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
