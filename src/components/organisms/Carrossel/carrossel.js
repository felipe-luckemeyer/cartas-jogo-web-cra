import React, { useState, useEffect } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AnimatePresence } from 'framer-motion';
import * as s from './styled-carrossel';
import { Icons } from '../../../assets';

const Carrossel = ({ children, pages }) => {
  const [actualPage, setActualPage] = useState(1);
  const [last, setLast] = useState(false);
  const [init, setInit] = useState(true);
  const animations = {
    visible: { opacity: 1, x: 0 },
    hiddenLeft: { opacity: 0 },
    hiddenRight: { opacity: 0, x: 15 },
    hoverLeft: { x: -5 },
    hoverRight: { x: 5 },
  };

  useEffect(() => {
    if (actualPage === pages) {
      if (pages === 1) {
        setInit(true);
        setLast(true);
      } else {
        setInit(false);
        setLast(true);
      }
    } else if (actualPage === 1) {
      setInit(true);
      setLast(false);
    } else {
      setInit(false);
      setLast(false);
    }
  }, [actualPage, pages]);

  return (
    <s.Container
      dragEnabled={false}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={pages}
    >
      <AnimatePresence>
        <s.NavWrapper
          variants={animations}
          whileHover={'hoverLeft'}
          initial={'hiddenLeft'}
          animate={'visible'}
          visible={!init}
          right
        >
          <ButtonBack className="nav-button" onClick={() => setActualPage(actualPage - 1)}>
            <img src={Icons.arrowLeft} alt="Voltar" />
          </ButtonBack>
        </s.NavWrapper>
      </AnimatePresence>

      <s.SlideContainer>{children}</s.SlideContainer>
      <AnimatePresence>
        <s.NavWrapper
          variants={animations}
          whileHover={'hoverRight'}
          initial={'hiddenRight'}
          animate={'visible'}
          visible={!last}
          left
        >
          <ButtonNext className="nav-button" onClick={() => setActualPage(actualPage + 1)}>
            <img src={Icons.arrowRight} alt="Próximo" />
          </ButtonNext>
        </s.NavWrapper>
      </AnimatePresence>
    </s.Container>
  );
};

export default Carrossel;
