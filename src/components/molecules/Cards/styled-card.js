import styled from 'styled-components';
import { Colors, Shadow } from '../../../utils/styled-global';

export const Container = styled.div`
  width: 125px;
  height: 180px;
  padding: 4px;
  background: ${(props) => {
    if (props.possui) {
      switch (props.classe) {
        case 'escudo':
          return Colors.marrom;
        case 'fogo':
          return Colors.amarelo;
        case 'magia':
          return Colors.roxo;
        default:
          break;
      }
    } else {
      return Colors.cinza2;
    }
  }};
  box-shadow: ${Shadow};
  border-radius: 5px;
`;

export const Title = styled.div`
  display: flex;
  width: max-content;
  height: 15px;
  background: #ffffff;
  border-radius: 2px;
  position: absolute;
  margin-top: 5px;
  margin-left: 19px;
  padding: 0px 6px;

  label {
    font-family: IM FELL DW Pica SC;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: ${Colors.title};
  }
`;

export const Hero = styled.img`
  width: 90px;
  height: 95px;
  background: #fff;
  position: absolute;
  margin-top: 36px;
  margin-left: 13px;
  border-radius: 50px;
  transform: scaleY(1.25);
  box-shadow: ${Shadow};
  border: 2px solid ${(props) => (props.possui ? Colors.begeEscuro : Colors.cinza3)};
  object-fit: fill;
  ${(props) => !props.possui && `filter: grayscale(100%);`}
`;

export const Status = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: absolute;
  margin-top: ${(props) => `${props.y}px`};
  margin-left: ${(props) => `${props.x}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: ${(props) => props.status === 'mana' && '2px solid #fff'};
  background: ${(props) => {
    if (props.possui) {
      switch (props.status) {
        case 'ataque':
          return Colors.laranja;
        case 'vida':
          return Colors.vermelho;
        case 'mana':
          return Colors.azulClaro;
        default:
          break;
      }
    } else {
      switch (props.status) {
        case 'ataque':
          return Colors.cinza2;
        case 'vida':
          return Colors.cinza2;
        case 'mana':
          return Colors.cinza1;
        default:
          break;
      }
    }
  }};
  box-shadow: ${(props) => props.status !== 'mana' && Shadow};

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
  }
`;

export const Firula = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: absolute;
  margin-top: ${(props) => `${props.y}px`};
  margin-left: ${(props) => `${props.x}px`};
  background: ${(props) => (props.possui ? Colors.marromEscuro : Colors.cinza1)};
  border: 2px solid ${(props) => (props.possui ? Colors.begeEscuro : Colors.cinza3)};
  box-shadow: ${Shadow};
  border-radius: 2px;
`;

export const Classe = styled.img`
  position: absolute;
  margin-top: 134px;
  margin-left: 45px;
`;
