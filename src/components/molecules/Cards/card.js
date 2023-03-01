import React from 'react';
import * as s from './styled-card';
import { Icons } from '../../../assets';

const Card = ({ card }) => {
  const renderClass = () => {
    switch (card.classe) {
      case 'escudo':
        return Icons.escudo;
      case 'fogo':
        return Icons.fogo;
      case 'magia':
        return Icons.magia;
      default:
        break;
    }
  };

  return (
    <s.Container whileHover={{ y: -2 }} possui={card.hasCard} classe={card.classe}>
      <s.Title>
        <label>{card.nome}</label>
      </s.Title>
      <s.Status possui={card.hasCard} status="mana" size={23} x={0} y={0}>
        <label>{card.mana}</label>
      </s.Status>
      <s.Firula possui={card.hasCard} width={115} height={39} x={1} y={122} />
      <s.Firula possui={card.hasCard} width={103} height={33} x={7} y={135} />
      <s.Hero possui={card.hasCard} src={card.image || Icons.profile} alt="Personagem da carta" />

      <s.Classe src={renderClass()} alt={`Class ${card.classe}`} />
      <s.Status possui={card.hasCard} status="ataque" size={23} x={23} y={120}>
        <label>{card.ataque}</label>
      </s.Status>
      <s.Status possui={card.hasCard} status="vida" size={23} x={70} y={120}>
        <label>{card.vida}</label>
      </s.Status>
    </s.Container>
  );
};

export default Card;
