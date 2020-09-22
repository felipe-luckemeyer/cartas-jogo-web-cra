import React from "react";
import { MenuButton } from "../../components";
import * as s from "./styled-menu";

const Menu = () => {
  return (
    <s.Container className="fade-in">
      <s.Menu>
        <MenuButton text={"Jogar"} path={"/batalha"} />
        <MenuButton text={"Coleção"} path={"/colecao"} />
        {/* <MenuButton
          text={"Conquistas"}
          path={"/colecao"}
          disabled
        /> */}
      </s.Menu>
    </s.Container>
  );
};

export default Menu;
