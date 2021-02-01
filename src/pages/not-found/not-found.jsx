import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './styled-not-found';
import { Images } from '../../assets';
const NotFound = () => {
  return (
    <s.Container className="fade-in">
      <s.Content>
        <h1>Acho que você se perdeu...</h1>
        <img src={Images.localizacao} alt="Localização" />
        <Link to="/">Volta</Link>
      </s.Content>
    </s.Container>
  );
};

export default NotFound;
