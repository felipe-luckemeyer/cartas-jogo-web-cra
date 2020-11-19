import { createGlobalStyle } from "styled-components";
import { Images } from "../assets";

export const Colors = {
  marromEscuro: "#2B2821",
  marrom: "#624C3C",
  marromClaro: "#B1A58D",
  begeEscuro: "#D9AC8B",
  bege: "#E3CFB4",
  azulEscuro: "#243D5C",
  azul: "#5D7275",
  azulClaro: "#5C8B93",
  roxo: "#765B8B",
  vermelho: "#B03A48",
  laranja: "#D4804D",
  amarelo: "#E0C872",
  verde: "#3E6958",
  cinza1: "#666666",
  cinza2: "#A7A7A7",
  cinza3: "#C2C2C2",
};

export const Shadow = " 2px 2px 2px rgba(0, 0, 0, 0.25)"

export const GlobalStyled = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-family: Cinzel;
    font-size: 28px;
    /* background: ${Colors.marrom}; */
    background-image: url(${Images.fundoPadrao});
    background-repeat: no-repeat;
    background-size: cover;
  }

.fade-in {
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
