import React from 'react'
import * as s from "./styled-card";

const Card = ({ carta }) => {
  return (
    <s.Container>
      {/* header */}
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <s.Status status="mana" size={23}>
          <label>{carta.mana}</label>
        </s.Status>
        <s.Title>
          <label>{carta.nome}</label>
        </s.Title>
      </div>
      {/* body */}
      <div>
        <s.Hero>
          <img>
          </img>
        </s.Hero>
        <s.Status status="ataque" size={23}>
          <label>{carta.ataque}</label>
        </s.Status>
        <s.Status status="vida" size={23}>
          <label>{carta.vida}</label>
        </s.Status>

      </div>


      {/* footer */}

    </s.Container>
  )
}

export default Card
