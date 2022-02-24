import styled from 'styled-components';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { motion } from 'framer-motion';
import { Shadow } from '../../../utils/styled-global';

export const Container = styled(CarouselProvider)`
  display: flex;
  align-items: center;

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31px;
    width: 31px;
    box-shadow: ${Shadow};
    border-radius: 2px;
    border: none;
    background: white;
  }
`;
export const SlideContainer = styled(Slider)`
  height: 390px;
  width: 436px;
  /* mawidth: 436px; */
`;

export const NavWrapper = styled(motion.div)`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  margin-right: ${(props) => props.right && '10px'};
  margin-left: ${(props) => props.left && '10px'};
`;
