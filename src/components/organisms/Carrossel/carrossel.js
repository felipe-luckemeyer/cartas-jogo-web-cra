import React, { useState, useEffect } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import * as s from './styled-carrossel';
import { Icons } from '../../../assets';

const Carrossel = ({ children, paginas }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [last, setLast] = useState(false);
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (paginaAtual === paginas) {
      if (paginas === 1) {
        setInit(true);
        setLast(true);
      } else {
        setInit(false);
        setLast(true);
      }
    } else if (paginaAtual === 1) {
      setInit(true);
      setLast(false);
    } else {
      setInit(false);
      setLast(false);
    }
  }, [paginaAtual, paginas]);

  return (
    <s.Container
      dragEnabled={false}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={paginas}
    >
      {!init ? (
        <motion.div whileHover={{ x: -5 }}>
          <ButtonBack className="nav-button" onClick={() => setPaginaAtual(paginaAtual - 1)}>
            <img src={Icons.arrowLeft} alt="Voltar" />
          </ButtonBack>
        </motion.div>
      ) : (
        <div style={{ height: 31, width: 31 }} />
      )}

      <s.SlideContainer>{children}</s.SlideContainer>
      {!last ? (
        <motion.div whileHover={{ x: 5 }}>
          <ButtonNext className="nav-button" onClick={() => setPaginaAtual(paginaAtual + 1)}>
            <img src={Icons.arrowRight} alt="Próximo" />
          </ButtonNext>
        </motion.div>
      ) : (
        <div style={{ height: 31, width: 31 }} />
      )}
    </s.Container>
  );
};

export default Carrossel;
