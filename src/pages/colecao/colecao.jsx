import React, {useState, useEffect} from "react";
// import {Images } from "../../assets";
import { Card } from "../../components";
import {PegaCartas} from "../../services";
import * as s from "./styled-colecao";

const Colecao = () => {
  const [cartas, setCartas] = useState([])

  // const cartas = [
  //   {
  //     possui: true,
  //     nome: "Smithao muito brabo",
  //     mana: 5,
  //     classe: "fogo",
  //     vida: 7,
  //     ataque: 5,
  //     image: Images.smith,
  //   },
  //   {
  //     possui: false,
  //     nome: "Smithao muito brabo",
  //     mana: 5,
  //     classe: "fogo",
  //     vida: 7,
  //     ataque: 5,
  //     image: Images.smith,
  //   }
  // ];

useEffect(() => {
  PegaCartas().then((resp) => {
    setCartas(resp.data.cartas)
  }).catch(e => {
    console.log('e', e)
  })
}, [])

  return (
    <s.Container className="fade-in">
      <s.Content>
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
