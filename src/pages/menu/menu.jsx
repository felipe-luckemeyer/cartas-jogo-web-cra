import React from 'react';
import { ButtonFilled } from '../../components';
import * as s from './styled-menu';
import { Colors } from '../../utils/styled-global';

const Menu = () => {
  return (
    <s.Container className="fade-in">
      <s.Menu>
        <ButtonFilled
          text={'Jogar'}
          color={Colors.marromEscuro}
          width={207}
          height={51}
          path={'/batalha'}
        />
        <ButtonFilled
          text={'Coleção'}
          color={Colors.marromEscuro}
          width={207}
          height={51}
          path={'/colecao'}
        />
      </s.Menu>
    </s.Container>
  );
};

export default Menu;
