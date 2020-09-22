import styled from "styled-components";
import { Colors } from "../../utils/styled-global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;
