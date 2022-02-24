import styled from 'styled-components';
import { Colors } from '../../utils';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  user-select: none;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 613px;
  height: 568px;
  border-radius: 5px;
  background: ${Colors.bege};
  border: 7px solid ${Colors.begeEscuro};

  .focusRing___1airF {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  height: 89px;
  width: 100%;
  max-width: 425px;
  background: #fff;
  margin: 20px auto 0px auto;
`;

export const PanelCartas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  height: 390px;
  width: 100%;
  max-width: 436px;
  justify-items: center;
  align-items: center;
  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;
