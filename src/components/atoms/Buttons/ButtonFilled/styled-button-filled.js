import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Shadow } from '../../../../utils/styled-global';

export const Button = styled(Link)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ color }) => color};
  border-radius: 2px;
  box-shadow: ${Shadow};
  display: grid;
  place-items: center;
  font-family: Cinzel;
  font-size: 18px;
  color: white;
  font-weight: 600;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  :hover {
    background: white;
    color: ${({ color }) => color};
  }
`;
