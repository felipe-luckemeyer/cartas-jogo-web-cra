import styled from "styled-components";
import { Colors } from "../../utils/styled-global"

export const Container = styled.div`
  width:125px;
  height: 180px;
  background: #624C3C;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
export const Title = styled.div`
  display: flex;
  width:85px;
  height: 11px;
  background: #FFFFFF;
  border-radius: 2px;

  label{
    font-family: IM FELL DW Pica SC;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
  }
`;

export const Hero = styled.div`
  width:100px;
  height: 121px;
  background: #FFFFFF;
  border-radius: 50px;
  border: 2px solid ${Colors.begeEscuro};
`;

export const Status = styled.div`
  height:${props => `${props.size}px`};
  width:${props => `${props.size}px`};
  border-radius: 50px;
  display: flex;
  justify-content:center;
  align-items:center;
  background: ${props => {
    switch (props.status) {
      case "ataque":
        return Colors.laranja
      case "vida":
        return Colors.vermelho
      case "mana":
        return Colors.azulClaro
      default:
        break;
    }
  }};

  label{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
  }
`;