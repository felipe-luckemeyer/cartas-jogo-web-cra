import styled from "styled-components";
import { Colors } from "../../utils/styled-global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  h1 {
    text-align: center;
    color: ${Colors.marromClaro};
  }
  a {
    margin-top: 30px;
    color: ${Colors.marromClaro};
    :hover {
      color: ${Colors.amarelo};
    }
  }
  section {
    :last-child {
      width: 100%;
      max-width: 800px;
      height: 600px;
      border-radius: 5px;
      background: ${Colors.bege};
      border: 7px solid ${Colors.begeEscuro};
    }
  }
`;
export const Tab = styled.button`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0px 0px 5px;
  border: none;
  background: ${({ selected }) => (selected ? "white" : Colors.begeEscuro)};
  margin-top: ${({ top }) => top}px;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
  }
  :disabled {
    background: ${Colors.marromClaro};
    cursor: not-allowed;
  }
`;