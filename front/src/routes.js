import React from 'react'
import { Menu, Batalha, Colecao } from "./screens/";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
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
    </div>
  )
}

export default Routes
