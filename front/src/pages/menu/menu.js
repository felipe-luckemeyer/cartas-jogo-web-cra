import React from 'react'
import { MenuButton } from "../../components"
import * as s from "./styled-menu";

const Menu = () => {
  return (
    <s.Container>
      <MenuButton
        text={"Jogar"}
        path={"/batalha"}
      />
      {/* <MenuButton
        text={"Colecao"}
        path={"/colecao"}
      />
      <MenuButton
        text={"Conquistas"}
        path={"/colecao"}
      /> */}
    </s.Container>
  )
}

export default Menu
