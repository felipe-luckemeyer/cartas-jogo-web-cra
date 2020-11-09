import styled from "styled-components";
import { Colors } from "../../../utils/styled-global";

export const Container = styled.div`
  width: 125px;
  height: 180px;
  padding: 4px;
  background: ${(props) => {
    switch (props.classe) {
      case "escudo":
        return Colors.marrom;
      case "fogo":
        return Colors.amarelo;
      case "magia":
        return Colors.roxo;
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
    font-size: 10px;
    color: #000000;
  }
`;

export const Hero = styled.img`
  width: 90px;
  height: 95px;
  position: absolute;
  margin-top: 36px;
  margin-left: 13px;
  background: ${(props) => (props.img ? props.img : "#fff")};
  border-radius: 50px;
  transform: scaleY(1.25);
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  border: 2px solid ${Colors.begeEscuro};
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
  border: ${(props) => props.status === "mana" && "1px solid #fff"};
  background: ${(props) => {
    switch (props.status) {
      case "ataque":
        return Colors.laranja;
      case "vida":
        return Colors.vermelho;
      case "mana":
        return Colors.azulClaro;
      default:
        break;
    }
  }};

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
  background: #2b2821;
  border: 2px solid ${Colors.begeEscuro};
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const Classe = styled.img`
  position: absolute;
  margin-top: 134px;
  margin-left: 45px;
`;
