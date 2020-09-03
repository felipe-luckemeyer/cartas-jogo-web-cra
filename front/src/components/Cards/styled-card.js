import styled from "styled-components";
import { Colors } from "../../utils/styled-global"

export const Container = styled.div`
  width: 125px;
  height: 180px;
  padding: 4px;
  background: ${props => {
    switch (props.lane) {
      case "escudo":
        return Colors.marrom
      case "fogo":
        return Colors.amarelo
      case "magia":
        return Colors.roxo
      default:
        break;
    }
  }};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Title = styled.div`
  display: flex;
  width: max-content;
  height: 11px;
  background: #FFFFFF;
  border-radius: 2px;
  position:absolute;
  margin-top: 5px;
  margin-left: 19px;
  padding: 0px 6px;
/* width: 93px */
  label{
    font-family: IM FELL DW Pica SC;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: #000000;
  }

  @media(width: 93px){
    width: 93px;
    background: #000;
  }
`;

export const Hero = styled.div`
  width: 90px;
  height: 121px;
  position: absolute;
  margin-top: 20px;
  margin-left: 13px;
  background: #FFFFFF;
  border-radius: 15px 15px 2px 2px;
  box-shadow: 2px 1px 2px rgba(0,0,0,0.25);
  border: 2px solid ${Colors.begeEscuro};
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const Status = styled.div`
  width:${props => `${props.size}px`};
  height:${props => `${props.size}px`};
  position:absolute;
  margin-top:${props => `${props.y}px`};
  margin-left:${props => `${props.x}px`};
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius: 50px;
  border: ${props => props.status === "mana" && "1px solid #fff"};
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

export const Firula = styled.div`
  width: ${props => `${props.width}px`};;
  height:${props => `${props.height}px`};;
  position:absolute;
  margin-top:${props => `${props.y}px`};
  margin-left:${props => `${props.x}px`};

  background: #2B2821;
  border: 2px solid #D9AC8B;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const Lane = styled.img`
  position: absolute;
  margin-top: 145px;
  margin-left: 45px;
`;