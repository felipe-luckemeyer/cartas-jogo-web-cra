import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, Shadow } from '../../../../utils';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: ${Colors.vermelho};
  border-radius: 3px;
  box-shadow: ${Shadow};
  border: none;
  text-decoration: none;
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: 10px;

`;
