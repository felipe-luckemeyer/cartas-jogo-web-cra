import React from 'react';
import * as s from './styled-button-filled';

const ButtonFilled = ({ text, color, width, height, path }) => {
  return (
    <s.Button to={path} color={color} width={width} height={height}>
      {text}
    </s.Button>
  );
};

export default ButtonFilled;
