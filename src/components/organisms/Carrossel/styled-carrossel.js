import styled from 'styled-components';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { Shadow } from '../../../utils/styled-global';

export const Container = styled(CarouselProvider)`
  display: flex;
  align-items: center;

  .nav-button {
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
`;
