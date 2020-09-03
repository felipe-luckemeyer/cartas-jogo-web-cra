import React from 'react'
import * as s from "./styled-card";
import { Icons } from "../../assets"

const Card = ({ carta }) => {

  const renderLane = () => {
    switch (carta.lane) {
      case "escudo":
        return Icons.escudo
      case "fogo":
        return Icons.fogo
      case "magia":
        return Icons.magia
      default:
        break;
    }
  }

  return (
    <s.Container lane={carta.lane}>
      <s.Firula
        width={115}
        height={39}
        x={1}
        y={122}
      />
      <s.Hero>
        {carta.image
          ? <ul>{carta.image}</ul>
          : <img src={Icons.profile} alt="Herói" />}
      </s.Hero>

      <s.Title>
        <label>{carta.nome}</label>
      </s.Title>
      <s.Status status="mana" size={23} x={0} y={0}>
        <label>{carta.mana}</label>
      </s.Status>
      <s.Firula
        width={103}
        height={33}
        x={7}
        y={135}
      />
      <s.Lane src={renderLane()} />
      <s.Status status="ataque" size={23} x={12} y={120}>
        <label>{carta.ataque}</label>
      </s.Status>
      <s.Status status="vida" size={23} x={81} y={120}>
        <label>{carta.vida}</label>
      </s.Status>
    </s.Container>
  )
}

export default Card
