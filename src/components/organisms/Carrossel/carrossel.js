import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import * as s from './styled-carrossel';
import { Icons } from '../../../assets';

const Carrossel = ({ children, paginas }) => {
  return (
    <s.Container
      dragEnabled={false}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={paginas}
    >
      <motion.div whileHover={{ x: -5 }}>
        <ButtonBack className="nav-button">
          <img src={Icons.arrowLeft} alt="Voltar" />
        </ButtonBack>
      </motion.div>
      <s.SlideContainer>{children}</s.SlideContainer>
      <motion.div whileHover={{ x: 5 }}>
        <ButtonNext className="nav-button">
          <img src={Icons.arrowRight} alt="Próximo" />
        </ButtonNext>
      </motion.div>
    </s.Container>
  );
};

export default Carrossel;
