import React from 'react'
import { Link } from 'react-router-dom'
import * as s from "./styled-menu";

const Menu = () => {
  return (
    <s.Container>
      <div>
        <ul>
          <Link to="/batalha">Jogar</Link>
        </ul>
        <ul>
          <Link to="/colecao">Colecao</Link>
        </ul>
        <ul>
          <Link to="/colecao">Conquistas</Link>
        </ul>
      </div>

    </s.Container>
  )
}

export default Menu
