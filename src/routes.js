import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, Batalha, Colecao, NotFound } from './pages/';
import { GlobalStyled } from './utils/styled-global';

const Routes = () => {
  return (
    <>
      <GlobalStyled />
      <AnimatePresence>
        <Switch>
          <Route path="/batalha" exact component={Batalha} />
          <Route path="/colecao" exact component={Colecao} />
          <Route path="/" exact component={Menu} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
