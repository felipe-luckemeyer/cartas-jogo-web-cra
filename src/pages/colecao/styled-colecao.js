import styled from 'styled-components';
import { Colors } from '../../utils/styled-global';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 600px;
  border-radius: 5px;
  background: ${Colors.bege};
  border: 7px solid ${Colors.begeEscuro};
`;
