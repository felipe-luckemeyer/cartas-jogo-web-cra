import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    font-family: Cinzel;
    font-size: 28px;
  }
`;

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
  verde: "#3E6958"
}