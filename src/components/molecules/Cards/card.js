import React from 'react'
import * as s from "./styled-card";
import { Icons } from "../../../assets"

const Card = ({ carta }) => {

  const renderClasse = () => {
    switch (carta.classe) {
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
    <s.Container classe={carta.classe}>
      <s.Title>
        <label>{carta.nome}</label>
      </s.Title>
      <s.Status status="mana" size={23} x={0} y={0}>
        <label>{carta.mana}</label>
      </s.Status>
      <s.Firula
        width={115}
        height={39}
        x={1}
        y={122}
      />
      <s.Firula
        width={103}
        height={33}
        x={7}
        y={135}
      />
      <s.Hero img={carta.image} />
      <s.Classe src={renderClasse()} />
      <s.Status status="ataque" size={23} x={23} y={120}>
        <label>{carta.ataque}</label>
      </s.Status>
      <s.Status status="vida" size={23} x={70} y={120}>
        <label>{carta.vida}</label>
      </s.Status>
    </s.Container>
  )
}

export default Card
