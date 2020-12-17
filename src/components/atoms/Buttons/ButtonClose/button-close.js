import React from 'react';
import * as s from './styled-button-close';
import { Icons } from '../../../../assets';

const ButtonClose = ({ path, style }) => {
  return (
    <s.Button to={path} style={style}>
      <img src={Icons.close} alt="Fechar" width={20} />
    </s.Button>
  );
};

export default ButtonClose;
