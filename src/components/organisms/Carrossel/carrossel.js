import React, { useState, useEffect } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion, AnimatePresence } from 'framer-motion';
import * as s from './styled-carrossel';
import { Icons } from '../../../assets';

const Carrossel = ({ children, paginas }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [last, setLast] = useState(false);
  const [init, setInit] = useState(true);
  const animations = {
    visible: { opacity: 1, x: 0 },
    hiddenLeft: { opacity: 0, x: -15 },
    hiddenRight: { opacity: 0, x: 15 },
    hoverLeft: { x: -5 },
    hoverRight: { x: 5 },
  };

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
      <AnimatePresence>
        {!init && (
          <motion.div
            style={{
              position: 'absolute',
              left: '45px',
            }}
            variants={animations}
            whileHover={'hoverLeft'}
            initial={'hiddenLeft'}
            animate={'visible'}
            exit={'hiddenLeft'}
          >
            <ButtonBack className="nav-button" onClick={() => setPaginaAtual(paginaAtual - 1)}>
              <img src={Icons.arrowLeft} alt="Voltar" />
            </ButtonBack>
          </motion.div>
        )}
      </AnimatePresence>

      <s.SlideContainer>{children}</s.SlideContainer>
      <AnimatePresence>
        {!last && (
          <motion.div
            style={{
              position: 'absolute',
              right: '45px',
            }}
            variants={animations}
            whileHover={'hoverRight'}
            initial={'hiddenRight'}
            animate={'visible'}
            exit={'hiddenRight'}
          >
            <ButtonNext className="nav-button" onClick={() => setPaginaAtual(paginaAtual + 1)}>
              <img src={Icons.arrowRight} alt="Próximo" />
            </ButtonNext>
          </motion.div>
        )}
      </AnimatePresence>
    </s.Container>
  );
};

export default Carrossel;
