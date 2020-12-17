import React, { useState, useEffect } from 'react';
// import {Images } from "../../assets";
import { Card, ButtonClose } from '../../components';
import { PegaCartas } from '../../services';
import * as s from './styled-colecao';

const Colecao = () => {
  const [cartas, setCartas] = useState([]);

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
    // PegaCartas().then((resp) => {
    //   setCartas(resp.data.cartas)
    // }).catch(e => {
    //   console.log('e', e)
    // })
  }, []);

  const content = {
    visible: { opacity: 1, x: 0, scale: 0.95 },
    hidden: { opacity: 0, x: -800 },
  };

  return (
    <s.Container>
      <s.Content initial="hidden" animate="visible" variants={content}>
        <ButtonClose
          path={'/'}
          onClick={() => {}}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
        <section>
          {cartas.map((carta, i) => (
            <Card carta={carta} key={i} />
          ))}
        </section>
      </s.Content>
    </s.Container>
  );
};

export default Colecao;
