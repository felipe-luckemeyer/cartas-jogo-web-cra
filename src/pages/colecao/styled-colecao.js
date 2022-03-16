import styled from 'styled-components';
import { Colors } from '../../utils';
import { motion } from 'framer-motion';
import { breakpointMax, sm, xs } from '../../utils/breakpoints';

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
  width: 70%;
  background: #fff;
  margin: 20px auto 0px auto;
  ${breakpointMax(sm)} {
    width: 75%;
  }
  ${breakpointMax(xs)} {
    width: 80%;
  }
`;

export const PanelCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  height: 390px;
  width: 100%;
  max-width: 436px;
  justify-items: center;
  align-items: center;
  ${breakpointMax(sm)} {
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
  }
`;
