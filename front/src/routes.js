import React from 'react'
import { Menu, Batalha, Colecao } from "./pages/";
import { Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./utils/styled-global";

const Routes = () => {
  return (
    <>
      <GlobalStyled />
      <Switch>
        <Route path="/batalha">
          <Batalha />
        </Route>
        <Route path="/colecao">
          <Colecao />
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
