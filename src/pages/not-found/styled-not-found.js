import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  h1 {
    text-align: center;
    color: ${Colors.marromClaro};
  }
  a {
    margin-top: 30px;
    color: ${Colors.marromClaro};
    :hover {
      color: ${Colors.amarelo};
    }
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 613px;
  height: 568px;
  border-radius: 5px;
  background: ${Colors.bege};
  border: 7px solid ${Colors.begeEscuro};
`;
