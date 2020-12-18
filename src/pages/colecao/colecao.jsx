import React, { useState, useEffect } from 'react';
import { useAnimation, AnimatePresence } from 'framer-motion';
import { Card, ButtonClose } from '../../components';
import * as s from './styled-colecao';
import { PegaCartas } from '../../services';
// import {Images } from "../../assets";

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

const Colecao = () => {
  const [cartas, setCartas] = useState([]);
  const controls = useAnimation();
  const animations = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0, scale: 0.95 },
  };

  useEffect(() => {
    controls.start(animations.visible);
    // PegaCartas().then((resp) => {
    //   setCartas(resp.data.cartas)
    // }).catch(e => {
    //   console.log('e', e)
    // })
  }, [controls, animations]);

  return (
    <AnimatePresence>
      <s.Container>
        <s.Content initial="hidden" exit="hidden" variants={animations} animate={controls}>
          <ButtonClose
            path={'/'}
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
    </AnimatePresence>
  );
};

export default Colecao;
